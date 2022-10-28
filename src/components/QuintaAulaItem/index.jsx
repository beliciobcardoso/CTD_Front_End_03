export function QuintaAulaItem(props) {
  return (
    <>
      <li>
        <img src={props.list.author.picture} />
        <h1>{props.list.author.name}</h1>
        <p>Local: {props.list.location}</p>
      </li>
    </>
  );
}
