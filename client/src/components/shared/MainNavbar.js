import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/billboards/Billboards'>
          <li>Billboard</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default MainNavbar;