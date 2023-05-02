import "../css/signUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useState } from "react"; 

export function SignUpUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    console.log("Username: ", username);
    console.log("Password: ", password);

    // codice per inviare i dati al server 
  };

  return (
    <div className="wrapper">
    <div className="container-sign-up">
    <div className="container-logo-sign-up">
      <div className="img-sign-up"></div>
    </div>
      <div className="wrapper-header">
        <Link to="/signUpUser">
        <a href="Sign Up" className="underline-link">Sign Up</a>
        </Link>
        <Link to="/signInUser">
          <a href="Sign In">Sign In</a>
        </Link>
      </div>

      <form className="wrapper-form" onSubmit={handleSubmit}>
      <div class="input-group">

      <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <input
            type="email"
            class="form-control"
            id="username"
            placeholder="Enter email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <Link to="/homeUser">
         
        <button type="submit" class="btn btn-success" style={{width: '100%'}}>
          {" "}
          Sign Up{" "}
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
}
