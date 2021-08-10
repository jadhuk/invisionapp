import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import logo from "../../assets/pict/logo_technopartner.png";
import styles from "./login.module.css";
import { loginCheck } from "../../redux/services/userService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [grantType] = useState("password");
  const [clientSecret] = useState("0a40f69db4e5fd2f4ac65a090f31b823");
  const [clientId] = useState("e78869f77986684a");

  const history = useHistory();

  const handleLogin = () => {
    const store = window.localStorage;
    loginCheck(username, password, grantType, clientSecret, clientId)
      .then((response) => {
        console.log(response);
        store.setItem("token_type", response.token_type);
        store.setItem("expires_in", response.expires_in);
        store.setItem("access_token", response.access_token);
        history.push("/home");
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const home = () => {};

  return (
    <div className={styles.login__bg}>
      <div className={styles.login__container}>
        <img src={logo} className={styles.logo} />
        <div>
          <p className={styles.input__Title}>Email</p>
          <input
            className={styles.input}
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <p className={styles.input__Title}>Password</p>
          <input
            className={styles.input}
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <button onClick={handleLogin} className={styles.btn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
