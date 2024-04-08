import { useEffect,useState } from "react";
import {useMyContext} from "./Context";
import axios from "axios";

interface Transaction {
    description: string;
    amount: number;
  }

function Balance(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [total, setotal] = useState<number>(0.00)
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
        
        let income = transactions.reduce((total, transaction) => {
            return transaction.amount > 0 ?  total + transaction.amount : total;
        }, 0);
       
        const expenses = transactions.reduce((total, transaction) => {
            return transaction.amount < 0 ? total + transaction.amount : total;
        }, 0);
       
       setotal( income += expenses)
    },[transactions])
   
    return(
        <>
        <h2 className=" text-lg font-[700] my-2 flex justify-center text-[24px] mb-[48px] ">Expense Tracker</h2>
        <h4 className=" m-0 uppercase font-bold">Your Balance</h4>
        <h1 className="m-0 -tracking-1 bold font-bold text-[32px] ">{`$${total}`}</h1>
        </>
    )
}


export default Balance;