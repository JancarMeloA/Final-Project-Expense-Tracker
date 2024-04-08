import { useState, ChangeEvent, useEffect} from "react";
import axios from "axios";
import { MyContextProvider, useMyContext } from "./Context";

const decimal =   100000000000


interface Transaction {
    id: number,
  description: string;
  amount: number;
}




function Formulario() {
    const {updateData} = useMyContext();
    const [text, setText] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);

    useEffect(() => {
        updateData(transactionHistory);
    }, [transactionHistory, updateData]);


    const addTransaction = async () => {
        try {
            if (text === "" || amount === 0) {
                alert("Please add a text and amount");
                return;
            }
           const id =  Math.floor(Math.random() * decimal + 1) 
            const newTransaction: Transaction = {
                id: id,
                description: text,
                amount: amount
            };

            setTransactionHistory([...transactionHistory, newTransaction]);

            const response = await axios.post("http://localhost:3001/transactions", newTransaction,{
                headers:{
                    'Content-Type': 'application/json'
                }
            }); 

            console.log("Transacción agregada:", response.data);

         

        } catch (error) {
            console.error("Error al agregar transacción:", error);
        }
    };

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    return (
        <MyContextProvider>
                <>

            <h3 className="pb-[10px] m-40-0-10 border-b-gray-0.1 border-b-1 font-bold font-Lato-serif">Add new transaction</h3>
            <form className="flex flex-col">
                <label htmlFor="text" className="inline-block m-10-0">Text</label>
                <input type="text" id="text" className="w-full border border-gray-300 rounded-[2px] text-[16px] p-[10px]" placeholder="Enter text..."  onChange={handleTextChange} />
                <label htmlFor="amount" className="inline-block m-10-0 font-Lato-serif"> Amount<br/>(negative - expense, positive - income)</label>
                <input type="number" id="amount" className="w-full border border-gray-300 rounded-[2px] text-[16px] p-[10px]" placeholder="Enter amount..."  onChange={handleAmountChange} />
                <button type="button" className=" bg-purpure-w m-10-0-30 p-[10px] cursor-pointer block text-[16px] text-white" onClick={addTransaction}>
                    Add transaction
                </button>
            </form>
        </>
            </MyContextProvider>
    );
}

export default Formulario;
