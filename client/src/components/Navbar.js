import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <Link to='/'>
        <li></li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='/lists'>
        <li>Lists</li>
      </Link>
    </ul>
  </nav>
)

export default Navbar;