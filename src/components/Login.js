import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`{'userName': ${userName} , 'password' : ${password} }`);
  };

  return (
  
        <div className="row justify-content-center py-5">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fas fa-user"></span>
              </div>
              <h3 className="text-center mb-4">Sign In</h3>
              <form onSubmit={handleSubmit} className="login-form">
                <div class="form-group">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Username"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    Login
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-100 text-md-right">
                    <Link to='/'>Forgot Password</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
};

export default Login;