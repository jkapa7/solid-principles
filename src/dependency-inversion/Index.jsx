import { useState } from "react";
import { PropTypes } from "prop-types";
import api from "~/common/api";
//(DIP)
//DEPENDENCY INVERSION PRINCIPLE

export const ConnectedLoginForm = () => {
  const handleSubmit = async (email, password) => {
    await api.login(email, password);
  };
  return <LoginForm onSubmit={handleSubmit} />;
};

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Log in</button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
