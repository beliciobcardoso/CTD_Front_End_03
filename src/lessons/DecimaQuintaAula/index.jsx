import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem';
import './style.scss';

export function DecimaQuintaAula() {
  const [cep, setCep] = useState('');
  const [locations, setLocations] = useState([]);
  const [buttonOff, setButtonOff] = useState(true);
  const [newAddress, setNewAddress] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {}, []);

  function searchCep(cepReceived) {
    setCep(cepReceived);
    setButtonOff(true);

    if (cepReceived.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepReceived}/json/`).then(
        (response) => {
          response.json().then((address) => {
            if (address.erro !== undefined) {
              // Deu erro
              setButtonOff(true);
              alert('Cep não encontrado!!');
            } else {
              // Deu Sucesso
              setButtonOff(false);
              setNewAddress(address);
              console.log(address);
            }
          });
        }
      );
    }
  }

  function cadastraCep(event) {
    event.preventDefault();
    // console.log('Cadastra Cep!!'); usei este console.log para me orientar com os proximo passos e a logica

    if (locations.length === 0) {
      setLocations([...locations, newAddress]);
      setCep('');
    } else {
      locations.map((location) => {
        if (location.cep.replace('-', '') !== cep) {
          setLocations([...locations, newAddress]);
          setCep('');
        } else {
          alert('Cep já cadastrado!');
        }
      });
    }
  }

  function deleteLocation(currentLocation) {
    console.log(currentLocation.cep);

    locations.map((location) => {
      if (location.cep === currentLocation.cep) {
        setLocations(
          locations.filter(
            (currentLocation) => location.cep !== currentLocation.cep
          )
        );
      }
    });
  }

  return (
    <div className='decima-quarta-aula-component'>
      <form>
        <h1>Cadastrar endereços</h1>
        <div>
          <label htmlFor=''>Cep</label>
          <input
            type='number'
            value={cep}
            onChange={(event) => searchCep(event.target.value)}
          />
        </div>
        <button
          //   disabled={buttonOff ? true : false} deixei este comentário para lembrar como eu cheguei no raciocinio a baixo
          disabled={buttonOff}
          className={buttonOff ? 'disabledButton' : ''}
          onClick={(event) => {
            cadastraCep(event);
          }}
        >
          Cadastrar
        </button>
      </form>

      <section className='locations'>
        {locations.map((location, index) => {
          return (
            <DecimaQuintaAulaItem
              key={index}
              data={location}
              onDeleteLocation={(currentLocation) =>
                deleteLocation(currentLocation)
              }
            />
          );
        })}
      </section>
    </div>
  );
}
