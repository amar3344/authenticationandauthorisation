import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/">Login</Link>
    </li>
  </ul>
)

export default Header
