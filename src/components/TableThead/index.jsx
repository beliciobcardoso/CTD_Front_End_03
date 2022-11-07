import './style.scss';
export function TableThead(props) {
  return (
    <>
      <thead className='Thead'>
        <tr>
          <th>{props.tilte0}</th>
          <th>{props.tilte1}</th>
          <th>{props.tilte2}</th>
          <th>{props.tilte3}</th>
          <th>{props.tilte4}</th>
        </tr>
      </thead>
    </>
  );
}
