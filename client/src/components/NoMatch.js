import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
    <h1>404 - Page Not Found</h1>
    <Link to='/'>
      Return home
    </Link>
  </>
)

export default NoMatch;