import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-react-app">
    <div className="home-container">
      <Header />
      <div className="home-body-container">
        <div className="text-container">
          <h1>Clothes That Get YOU Noticed</h1>
          <p>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker you been
            seen and heard that way ypu are. So, celebrate the seasons new and
            exciting fashion in your own way.{' '}
          </p>
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="clothes-image"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Home
