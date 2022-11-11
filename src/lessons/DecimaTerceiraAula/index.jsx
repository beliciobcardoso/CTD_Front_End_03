import { useState, useEffect } from 'react';
import { ButtonTeste } from '../../components/ButtonTeste';
import './style.scss';
export function DecimaTerceiraAula() {
  const [texto, setTexto] = useState('');

  function cancelarPedido(event) {
    event.preventDefault();
    setTexto('');
    console.log('cancelarPedido');
  }

  useEffect(() => {
    setTimeout(() => {
      setTexto('Pizza');
    }, 3000);
  }, []);

  return (
    <main className='mainDecimaTerceiraAula'>
      <h1>Seu pedido: {texto}</h1>
      <form action=''>
        <ButtonTeste onClick={(event) => cancelarPedido(event)}>
          Cancelar pedido
        </ButtonTeste>
      </form>
    </main>
  );
}
