import './style.scss';
export function ListaTelefone(props) {
  return (
    <>
      <tr>
        <td>{props.teldata.nome}</td>
        <td>{props.teldata.telefone}</td>
      </tr>
    </>
  );
}
