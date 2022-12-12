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
    </ul>
  );
}
