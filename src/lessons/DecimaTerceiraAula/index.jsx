import { useState, useEffect } from 'react';
import { ButtonTeste } from '../../components/ButtonTeste';
import './style.scss';
export function DecimaTerceiraAula() {
  const [texto, setTexto] = useState('');
  console.log(
    '🚀 ~ file: index.jsx ~ line 6 ~ DecimaTerceiraAula ~ texto',
    texto
  );

  function cancelarPedido(event) {
    event.preventDefault();
    setTexto('');
  }

  useEffect(() => {
    setTimeout(() => {
      setTexto('Pizza');
    }, 5000);
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
