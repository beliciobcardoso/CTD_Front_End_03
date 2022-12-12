import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { ToDo } from './pages/ToDo';

import { ThemeProvider } from './hooks/useTheme';
import { LanguageProvider } from './hooks/useLanguage';
import { Configurations } from './pages/Configurations';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'Configurations', element: <Configurations /> },
        { path: 'AppGames', element: <AppGames /> },
        { path: 'AppLoja', element: <AppLoja /> },
        { path: 'ToDo', element: <ToDo /> },
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
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={appRouter} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
