import React from 'react';

const LoginRegister = () => {
  return (
    <div className="container my-4">
      <h1>Login or Register</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
        
        <div className="col-md-6">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-success">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
