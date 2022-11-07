import './style.scss';
export function ButtonTeste(props) {
  return (
    <>
      <button className='buttonTeste' type={props.type} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
}
