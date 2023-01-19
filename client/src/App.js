import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Billboards from './components/billboards/Billboards';
import MainNavbar from './components/shared/MainNavbar';
import Artists from './components/artists/Artists';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/billboards/Billboards' element={<Billboards />} />
      <Route path='/:billboardId/artists' element={<Artists/>} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;