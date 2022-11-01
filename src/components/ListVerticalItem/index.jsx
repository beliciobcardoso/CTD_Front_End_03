import windowsClient from '../../assets/windowsClient.png';
import macClient from '../../assets/macClient.png';
export function ListVerticalItem(props) {
  const plataform = props.item.plataforms;
  // console.log(plataform);
  const windows = (plataform.windows = 'windows' ? windowsClient : null);
  const mac = (plataform.mac = 'macsssss' ? macClient : null);
  console.log(mac);
  return (
    <>
      <main className='ListVerticalItem'>
        <div>
          <img src={props.item.picture} />
        </div>
        <div className='segundaLinha'>
          <div>
            <h1>{props.item.name}</h1>
          </div>
          <div>
            <div>
              <img src={windows} />
              <img src={mac} />
            </div>
            <div>
              <p>{props.item.price}</p>
            </div>
          </div>
          <div>
            <p>{props.item.categories}</p>
          </div>
        </div>
      </main>
    </>
  );
}
