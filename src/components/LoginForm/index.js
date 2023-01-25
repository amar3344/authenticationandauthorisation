import {Redirect} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'

import './index.css'

const LoginForm = () => {
  const [name, setName] = useState('')
  const [passwords, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const getUserName = e => {
    setName(e.target.value)
  }

  const getPassword = e => {
    setPassword(e.target.value)
  }

  const getSubmitFormSuccess = token => {
    setError(false)
    //const {history} = props

    const jwtToken = token
    Cookies.set('jwtToken', jwtToken, {expires: 1})
  }

  const getFailureForm = data => {
    setError(true)
    setErrorMessage(data.error_msg)
  }

  const onSubmitForm = async e => {
    e.preventDefault()
    const userDetails = {username: name, password: passwords}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const res = await fetch(url, options)
    const data = await res.json()

    if (res.ok === true) {
      getSubmitFormSuccess(data.jwt_token)
    } else {
      getFailureForm(data)
    }
  }

  return (
    <div className="react-app">
      <div className="nxt-trend-container">
        <div className="nxt-tend-Image-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="nxt-trend-image"
          />
        </div>
        <form onSubmit={onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="input-container">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              value={name}
              placeholder="USERNAME"
              onChange={getUserName}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={passwords}
              placeholder="PASSWORD"
              onChange={getPassword}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
