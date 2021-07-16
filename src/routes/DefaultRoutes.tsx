import { Route, Switch } from 'react-router-dom'
import login from '../pages/unauthenticated/login'

const DefaultRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={login} />
    </Switch>
  )
}

export default DefaultRoutes
