import {useState} from 'react'

import './index.css'

const LoginForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitForm = async e => {
    e.preventDefault()
    const userDetails = {userName: name, userPassword: password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
  }

  const getUserName = e => {
    setName(e.target.value)
  }

  const getPassword = e => {
    setPassword(e.target.value)
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
              value={password}
              placeholder="PASSWORD"
              onChange={getPassword}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
