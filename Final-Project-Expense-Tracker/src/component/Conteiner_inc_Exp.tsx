import { useEffect,useState } from "react";
import {useMyContext} from "./Context";
import axios from "axios";


interface Transaction {
    description: string;
    amount: number;
  }
  

function Conteiner_inc_Exp (){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [expenses, setExpenses] = useState<number>(0.00);
    const [income, setIncome] = useState<number>(0.00);

    const {data} = useMyContext();
    useEffect(() => {
    
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/transactions");
                console.log("Datos recibidos:", response.data);
                setTransactions(response.data);
            } catch (error) {
                console.error("Error al obtener transacciones:", error);
            }
        };
     fetchData();
    },[]);
    useEffect(() => {
    
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/transactions");
                console.log("Datos recibidos:", response.data);
                setTransactions(response.data);
            } catch (error) {
                console.error("Error al obtener transacciones:", error);
            }
            
        };
     fetchData();
    }, [data]);

    
    useEffect(()=>{
        const inCome = transactions.reduce((total, transaction) => {
            return transaction.amount > 0 ?  total + transaction.amount : total;
        }, 0);
        setIncome(inCome)
        const exPenses = transactions.reduce((total, transaction) => {
            return transaction.amount < 0 ? total + transaction.amount : total;
        }, 0);
        setExpenses(exPenses)

    },[transactions])
   
 return(
 <>

<div id="inc-exp-conteiner" className=" flex p-[20px] m-20-0 shadow-shadow-1.0 justify-between font-Lato-serif">
<div className=" text-center flex-1   ">
    <h4 className=" m-0 uppercase font-bold font-Lato-serif">Income</h4>
    <span className="text-green-400 text-[22px] font-Lato-serif">{ ` $${income}` }</span>
 </div>
 <div className=" text-center flex-1 font-Lato-serif">
    <h4 className="m-0 uppercase font-bold">Expense</h4>
    <span className="text-red-500 text-[22px]">{ ` $${expenses}`}</span>
 </div>
</div>
 </>)
}


export default Conteiner_inc_Exp ;