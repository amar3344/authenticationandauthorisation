import {Switch, Route} from 'react-router-dom'

import './index'
import Login from './components/LoginForm'
import Home from './components/Home'
import ProtectedRouter from './components/ProtectedRouter/protecter'

import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRouter exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
