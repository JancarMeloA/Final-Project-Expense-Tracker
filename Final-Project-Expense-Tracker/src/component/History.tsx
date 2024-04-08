import { useEffect, useState } from "react";
import {MyContextProvider,useMyContext} from "./Context";
import axios from "axios";
import '../App.css'

interface Transaction {
    id: string
  description: string;
  amount: number;
}


export function History() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const {updateData} = useMyContext();
     useEffect(() => {
    
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/transactions/");
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
                updateData(response.data)
            } catch (error) {
                console.error("Error al obtener transacciones:", error);
            }
        };
     fetchData();
    }, [updateData]);
    
    const  deletetransaction = async (id: string)=>{
        try{
            const response = await axios.delete(`http://localhost:3001/transaction/${id}`);
            console.log("Dato eliminado:", response.data)
            setTransactions(transactions.filter(transaction => transaction.id !== id))

        }catch(error){
            console.error("Error al eliminar transaccion:", error)
        }
    }

    return (
        <MyContextProvider>
        <div>
            <h3 className=" pb-[10px] m-40-0-10 border-gray-0.1 border-b-1 font-bold">History</h3>
            <ul className=" p-0 mb-[40px] list-none">
            
                {
                    
                    transactions.map((transaction, index) => (
        
                        <>
                    <li key={index}  className={transaction.amount < 0 ? "bg-white text-gray-750 flex justify-between relative p-[10px] m-10-0 border-r-4 border-solid-red shadow-shadow-1.0 " : "bg-white text-gray-750 flex justify-between relative p-[10px] m-10-0  border-r-4 border-solid-green shadow-shadow-1.0 "}>
                 <button id="B_delete" onClick={() => deletetransaction(transaction.id)}  className="translate-x-100-50 border-0 text-white bg-red-600 p-2-5 text-[20px] leading-[20px] cursor-pointer absolute right-[100%] top-[25%]">x</button> 
                       <span className="flex justify-between">{transaction.description}</span><span className="flex justify-between">{transaction.amount}</span>
                    </li>
                        </>
                ))
                }
            </ul>
        </div>
        </MyContextProvider>
    );
}

export default History;
