import {Switch, Route} from 'react-router-dom'

import './index'
import Login from './components/LoginForm'
import Home from './components/Home'

import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
