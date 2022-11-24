import { Link } from 'react-router-dom';
import './styles.scss';
export function Menu() {
  return (
    <ul className='menu'>
      <Link to='/'>
        <li className='menuLink'>Home</li>
      </Link>
      <Link to='AppGames'>
        <li className='menuLink'>App Games</li>
      </Link>
      <Link to='AppLoja'>
        <li className='menuLink'>App Loja</li>
      </Link>
      <Link to='TerceiraAula'>
        <li className='menuLink'>Terceira Aula</li>
      </Link>
      <Link to='QuartaAula'>
        <li className='menuLink'>Quarta Aula</li>
      </Link>
      <Link to='QuintaAula'>
        <li className='menuLink'>Quinta Aula</li>
      </Link>
      <Link to='SextaAula'>
        <li className='menuLink'>Sexta Aula</li>
      </Link>
      <Link to='SetimaAula'>
        <li className='menuLink'>Setima Aula</li>
      </Link>
      <Link to='OitavaAula'>
        <li className='menuLink'>Oitava Aula</li>
      </Link>
      <Link to='DecimaTerceiraAula'>
        <li className='menuLink'>Decima Terceira Aula</li>
      </Link>

      <Link to='DecimaQuintaAula/01001000'>
        <p className='menuLink'>Decima Quinta Aula</p>
      </Link>
    </ul>
  );
}
