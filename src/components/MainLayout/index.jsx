import { Outlet } from 'react-router-dom';
import { Menu } from '../Menu';
import { MenuLateral } from '../MenuLateral';
import { useTheme } from '../../hooks/useTheme';
import './styles.scss';

export function MainLayout() {
  let contents = {
    english: {},
    portuguese: {},
  };

  // Importação do Tema utilização o Hook customizado "useTheme"
  const { theme } = useTheme();

  return (
    <div className={`main-layout-component ${theme}`}>
      <header className='main-layout-component-header'>
        <h1>Layout Principal</h1>
        <nav className='main-layout-component-nav'>
          <Menu />
        </nav>
      </header>
      <aside className='main-layout-component-aside'>
        <MenuLateral />
      </aside>
      <main className='main-layout-component-main'>
        <Outlet />
      </main>
    </div>
  );
}
