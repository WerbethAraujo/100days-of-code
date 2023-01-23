import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h1>Werbeth Araujo - Modal</h1>
      <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
      <Modal isOpen={openModal}>
        Modal aberto
        <button onClick={() => setOpenModal(false)}>Fechar</button>
      </Modal>
    </>
  );
}

export default App;
