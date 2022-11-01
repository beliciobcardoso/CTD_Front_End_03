import './style.scss';
export function ListHorizontalItem(props) {
  //   const categorie = () => props.item.categories.split(',');
  return (
    <>
      <main className='componetCard'>

        <div>
          <img src={props.item.picture} />
        </div>
        
        <div>
          <h1>{props.item.name}</h1>
          <p>{props.item.oldPrice}</p>
        </div>

        <div>
          <p>{props.item.categories}</p>
          <p>{props.item.newPrice}</p>
        </div>

      </main>
    </>
  );
}
