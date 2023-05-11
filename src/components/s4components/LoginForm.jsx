import { useLogin } from "../../hooks/useLogin";

import { useState } from "react";

import "./LogSign.style.scss";

const LoginForm = ({ setIsLoginFormOn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleClose = () => {
    setIsLoginFormOn(false);
  };
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className="form-box">
        <span onClick={handleClose}>X</span>
        <label className="email">
          <span>Email:</span>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label className="password">
          <span>Password:</span>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        {!isPending && <button className="btn">LOGIN</button>}
        {isPending && (
          <button className="btn" disabled>
            LOADING...
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
