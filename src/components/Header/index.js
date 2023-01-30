import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="home-header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="home-links">
      <li>
        <Link className="nav-links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/cart">
          Cart
        </Link>
      </li>
      <li>
        <Link className="nav-links log-out-button" to="/login">
          Log out
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
