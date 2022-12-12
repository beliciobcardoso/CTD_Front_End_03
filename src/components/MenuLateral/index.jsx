import { Link } from 'react-router-dom';
import './styles.scss';
export function MenuLateral() {
  return (
    <>
      <section className='menuLateralSection'>
        <h1>Aulas</h1>
        <ul className='menuLateral'>
          <Link to='/'>
            <li className='menuLateralLink'>Home</li>
          </Link>

          <Link to='TerceiraAula'>
            <li className='menuLateralLink'>Terceira Aula</li>
          </Link>
          <Link to='QuartaAula'>
            <li className='menuLateralLink'>Quarta Aula</li>
          </Link>
          <Link to='QuintaAula'>
            <li className='menuLateralLink'>Quinta Aula</li>
          </Link>
          <Link to='SextaAula'>
            <li className='menuLateralLink'>Sexta Aula</li>
          </Link>
          <Link to='SetimaAula'>
            <li className='menuLateralLink'>Setima Aula</li>
          </Link>
          <Link to='OitavaAula'>
            <li className='menuLateralLink'>Oitava Aula</li>
          </Link>
          <Link to='DecimaTerceiraAula'>
            <li className='menuLateralLink'>Decima Terceira Aula</li>
          </Link>
          <Link to='DecimaQuintaAula/15'>
            <li className='menuLateralLink'>Decima Quinta Aula</li>
          </Link>
        </ul>
      </section>
      <section>
        <section className='menuLateralSection'>
          <h1>Telas</h1>
          <ul>
            <Link to='AppGames'>
              <li className='menuLateralLink'>App Games</li>
            </Link>

            <Link to='AppLoja'>
              <li className='menuLateralLink'>App Loja</li>
            </Link>

            <Link to='ToDo'>
              <li>To Do</li>
            </Link>

            <Link to='Configurations'>
              <li>Configurações</li>
            </Link>
          </ul>
        </section>
      </section>
    </>
  );
}
