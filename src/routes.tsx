import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Login } from "./views/Login";
import { Home } from './views/Home';
import { Repos } from './views/Repos';
import { PageFollows } from './views/Follows';
import { Following } from './views/Following';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home/:user?" component={Home} />
        <Route path="/repos" component={Repos} />
        <Route path="/follows" component={PageFollows} />
        <Route path="/following" component={Following} />
      </Switch>
    </Router>
  )
}