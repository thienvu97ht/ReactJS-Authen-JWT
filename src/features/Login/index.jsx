import React from "react";
import LoginForm from "./components/LoginForm";
import authenApi from "../../api/authen";

LoginFeature.propTypes = {};

function LoginFeature(props) {
  const handleLoginFormSubmit = (values) => {
    const loginApp = async () => {
      const res = await authenApi.checkLogin(values);
      console.log(res);
    };

    loginApp();
  };

  return <LoginForm onSubmit={handleLoginFormSubmit} />;
}

export default LoginFeature;
