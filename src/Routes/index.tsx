import { Switch } from "react-router-dom";
import Route from "./routes";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboad";
import SingUp from "../Pages/SingUp";
import PageNotFound from "../Pages/PageNotFound";
import { useAuth } from "../contexts/AuthContext";

const Routes = () => {
  const { accessToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/singup" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};

export default Routes;
