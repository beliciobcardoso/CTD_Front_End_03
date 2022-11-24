import { Outlet } from 'react-router-dom';
import { Menu } from '../Menu';
import './styles.scss';
export function MainLayout() {
  return (
    <div className='main-layout-component'>
      <header className='main-layout-component-header'>
        <h1>Layout Principal</h1>
        <nav>
          <Menu />
        </nav>
      </header>

      <main className='main-layout-component-main'>
        <p>O conteúdo será carregado aqui dentro</p>
        <Outlet />
      </main>
    </div>
  );
}
