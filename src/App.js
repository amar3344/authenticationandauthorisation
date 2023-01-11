import {Switch, Route} from 'react-router-dom'

import './index'
import Login from './components/LoginForm'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <>
    {Header}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
