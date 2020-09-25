import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAction } from "../redux/actions";
import { selectLoginData } from "../redux/reducer";

function Login(props: any) {
  const dispatch = useDispatch();
  const route = useHistory();
  const loginData = useSelector(selectLoginData);

  function handleSubmitLogin(e: any) {
    e.preventDefault();
    dispatch(loginAction("a", "a"));
  }

  useEffect(() => {
    loginData.username ? route.push('/dashboard') : route.push('/');
  }, [loginData])
  
  return (
    <div className="bgAwesome">
      <form
        className="awesomePlanetForm col-10 col-sm-8 col-md-4"
        onSubmit={handleSubmitLogin}
      >
        <div className="tittleLoginForm">
          <span>Ingresar al Panel de Control</span>
          <h1>INGRESAR</h1>
        </div>
        <div className="inputlight mt-3 mb-3">
          <input id="standard-user" type="text" />
        </div>
        <div className="inputlight">
          <input
            id="standard-password-input"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <br></br>
        <button type="submit">Entrar</button>
        {loginData.username ? `Usuario ${loginData.username} logeado` : ""}
      </form>
    </div>
  );
}
export default Login;
