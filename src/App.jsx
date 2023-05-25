import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from './Theme';

const theme = {
  fontFamily: 'Roboto, sans-serif',
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <GlobalTheme>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/starred' element={<Starred/>} />
          </Route>
          <Route path='/show/:showId' element={<Show />} />
          <Route path='*' element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
    </GlobalTheme>
  );
}

export default App;
