import React, { ComponentType } from "react";
import { RouteProps, Route as ReactRoute, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface ReactRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: ReactRouteProps) => {
  const { accesToken } = useAuth();

  return (
    <ReactRoute
      render={() => {
        return !!isPrivate === !!accesToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
