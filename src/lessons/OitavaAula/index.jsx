import { useState } from 'react';
import { ButtonTeste } from '../../components/ButtonTeste';
import { Input } from '../../components/Inpunt';
import { ListaTelefone } from '../../components/ListaTelefone';
import { TableThead } from '../../components/TableThead';
import './style.scss';
export function OitavaAula() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('-');
  const [agenda, setAgenda] = useState([]);

  let total;

  if (agenda.length <= 9) {
    total = '0' + agenda.length;
  } else {
    total = agenda.length;
  }

  function cadastraTelefone(event) {
    event.preventDefault();

    const novoTelefone = {
      nome: nome,
      telefone: telefone,
    };

    if (nome === '') {
      alert('Campo do nome vazio');
    } else if (telefone === '') {
      alert('Campo do telefone vazio');
    } else if (telefone.length < 11) {
      alert('Telefone é menor que o padrão');
    } else {
      setAgenda([...agenda, novoTelefone]);
      setNome('');
      setTelefone('');
    }
  }
  return (
    <main className='mainOitavaAula'>
      <h1>Oitava Aula Formulário</h1>
      <h2>Lista de Telefonica</h2>
      <span>Total: {total}</span>
      <form className='form'>
        <div>
          <label htmlFor='nome'>Nome: </label>
          <Input
            id='nome'
            type='text'
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='telefone'>Telefone: </label>
          <Input
            id='telefone'
            type='number'
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
        </div>
        <ButtonTeste type='submit' onClick={(event) => cadastraTelefone(event)}>
          Salvar
        </ButtonTeste>
      </form>
      <section className='ListaTel'>
        <table>
          <TableThead tilte0='Nome' tilte1='Telefone' />
          <tbody>
            {agenda.map((telefone, index) => {
              return <ListaTelefone key={index} teldata={telefone} />;
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}
