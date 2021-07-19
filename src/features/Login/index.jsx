import React from "react";
import LoginForm from "./components/LoginForm";
import authenApi from "../../api/authen";
import { useHistory } from "react-router-dom";

LoginFeature.propTypes = {};

function LoginFeature(props) {
  const history = useHistory();
  const handleLoginFormSubmit = (values) => {
    const loginApp = async () => {
      const res = await authenApi.checkLogin(values);

      const access_token = res.access_token;
      localStorage.setItem("access_token", access_token);
      history.push("/user");
    };

    loginApp();
  };

  return <LoginForm onSubmit={handleLoginFormSubmit} />;
}

export default LoginFeature;
