import { Switch } from "react-router-dom";
import Route from "./routes";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboad";
import SingUp from "../Pages/SingUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/singup" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
