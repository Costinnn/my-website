import { useSignup } from "../../hooks/useSignup";

import { useState } from "react";

import "./LogSign.style.scss";

const SignupForm = ({ setIsSignupFormOn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  const handleClose = () => {
    setIsSignupFormOn(false);
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className="form-box">
        <span onClick={handleClose}>X</span>
        <label className="email">
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label className="password">
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <label className="display-name">
          <span>Display Name:</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>

        {!isPending && <button className="btn">SIGN UP</button>}
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

export default SignupForm;
