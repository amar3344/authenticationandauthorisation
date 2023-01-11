import './index.css'

const Home = () => (
  <div className="react-app">
    <div className="home-nxt-trend-container">
      <div>
        <h1 className="home-heading">Clothes That Get You Noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution.Your fashion makrs you been seen and heard that
          way you are.So,celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button type="button">Shop Now</button>
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
)

export default Home
