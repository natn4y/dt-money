import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';

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
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <Modal
                isOpen={isTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            >
                <h2>Cadastrar transação</h2>
            </Modal>
            <GlobalStyle />
        </>
    );
}
