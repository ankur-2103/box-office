import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './Theme';

function App() {
  return (
    <GlobalTheme>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/starred' element={<Starred/>} />
          </Route>
          <Route path='/show/:showId' element={<Show />} />
          <Route path='*' element={<>Not Found</>} />
        </Routes>
      </HashRouter>
    </GlobalTheme>
  );
}

export default App;
