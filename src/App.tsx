import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
    const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
            <GlobalStyle />
        </TransactionsProvider>
    );
}
