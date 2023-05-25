import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './Theme';

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
