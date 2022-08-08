import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
