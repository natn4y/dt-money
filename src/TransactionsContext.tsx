import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions")
            .then(response => setTransactions(response.data.transactions));
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}