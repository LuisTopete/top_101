import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Lists from './components/lists/Lists';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> />
      <Route path="/about" element={<About /> />
      <Route path="/list" element={<List /> />
      <Route path="*" element={<NoMatch /> />
    </Routes>
  </>
)

export default App;