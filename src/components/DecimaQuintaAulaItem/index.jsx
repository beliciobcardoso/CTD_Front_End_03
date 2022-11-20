import './style.scss';

export function DecimaQuintaAulaItem(props) {
  return (
    <div className='decima-quinta-aula-item'>
      <h1>Nome do Endereç: {props.data.logradouro} </h1>
      <address>
        Rua: {props.data.logradouro}, Bairro: {props.data.bairro} - Cidade:
        {props.data.localidade}(Estado: {props.data.uf})
      </address>
      <small>Cep: {props.data.cep}</small>
      <button onClick={() => props.onDeleteLocation(props.data)}>
        Deletar
      </button>
    </div>
  );
}
