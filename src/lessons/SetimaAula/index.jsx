import { useState } from 'react';
import './style.scss';
export function SetimaAula() {
  const [contador, setContador] = useState(0);

  function incrementar(numero) {
    setContador(contador + numero);
  }
  return (
    <main>
      <h1>Setima Aula</h1>
      <h2>Contador</h2>
      <span>Número atual: {contador}</span>
      <button onClick={() => incrementar(3)}>Adicionar +1</button>
    </main>
  );
}
