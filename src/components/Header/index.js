import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    return history.replace('/login')
  }

  return (
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
          <button
            type="button"
            onClick={onClickLogout}
            className="nav-links log-out-button"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Header)
