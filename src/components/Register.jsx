import { useState } from "react";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    if (!name || !email || !password || !cpassword) {
      alert("Please fill all the fields proplerly!");
    } else if (password !== cpassword) {
      alert(
        "Password is not matching with the confirmed password! Please check and try again."
      );
    } else {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      window.location.replace("/");
    }
  };
  return (
    <div className="register container text-center">
      <h1 className="text-center" style={{ fontSize: "60px" }}>
        Please Register
      </h1>
      <form>
        <div className="form-input">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="name"
            placeholder="Enter Your Name"
            required
          />
        </div>
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
        <div className="form-input">
          <input
            type="password"
            name="cpassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            id="cpassword"
            className="cpassword"
            placeholder="Confirm Your Password"
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn-warning">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
