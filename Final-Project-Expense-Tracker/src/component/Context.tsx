import { createContext, useState, useContext, ReactNode } from 'react';
interface Transaction {
    id: number;
    description: string;
    amount: number;
}

interface MyContextType {
    data: Transaction[] | null;
    updateData: (newData: Transaction[] | null) => void;
}

// Crear el contexto
const MyContext = createContext<MyContextType | undefined>(undefined);

// Proveedor de contexto
export function MyContextProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Transaction[] | null>(null);

    const updateData = (newData: Transaction[] | null) => {
        setData(newData);
    };

    const contextValue: MyContextType = {
        data,
        updateData
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
}

// Hook personalizado para consumir el contexto
export function useMyContext() {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext debe ser utilizado dentro de un MyContextProvider');
    }
    return context;
}

