import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();

    if (!email || !password) {
      alert("Please fill all the fields proplerly!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Login successful! You are being redirected to home page.");
          window.location.replace("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  return (
    <div className="login container text-center">
      <h1 className="text-center" style={{ fontSize: "60px" }}>
        Please Login
      </h1>
      <form>
        <div className="form-input">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn-warning">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
