import { DecimaQuintaAula } from './lessons/DecimaQuintaAula';
import { DecimaTerceiraAula } from './lessons/DecimaTerceiraAula';
import { OitavaAula } from './lessons/OitavaAula';
import { QuartaAula } from './lessons/QuartaAula';
import { QuintaAula } from './lessons/QuintaAula';
import { SetimaAula } from './lessons/SetimaAula';
import { SextaAula } from './lessons/SextaAula';
import { TerceiraAula } from './lessons/TerceiraAula';
import { AppGames } from './pages/AppGames';
import { AppLoja } from './pages/AppLoja';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        { path: 'AppGames', element: <AppGames /> },
        { path: 'AppLoja', element: <AppLoja /> },
        { path: 'TerceiraAula', element: <TerceiraAula /> },
        { path: 'QuartaAula', element: <QuartaAula /> },
        { path: 'QuintaAula', element: <QuintaAula /> },
        { path: 'SextaAula', element: <SextaAula /> },
        { path: 'SetimaAula', element: <SetimaAula /> },
        { path: 'OitavaAula', element: <OitavaAula /> },
        { path: 'DecimaTerceiraAula', element: <DecimaTerceiraAula /> },
        { path: 'DecimaQuintaAula/:id', element: <DecimaQuintaAula /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
