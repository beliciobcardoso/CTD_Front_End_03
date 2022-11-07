import './style.scss';
export function Input(props) {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}
