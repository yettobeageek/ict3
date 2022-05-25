import React from 'react'
const Login = () => {
  return (
      <>
    <button type="button" className="btn btn-outline-dark ms-2   " data-bs-toggle="modal" data-bs-target="#loginModal">
        <span className="fa fa-sign-in"> Login</span></button>
    
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Login Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <button className="btn btn-primary w-100 mb-2">Sign in with<span className="fa fa-google mx-2"></span>GMAIL</button>
          <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form> 
          </div>
        </div>
      </div>
    </div> 
      </>
    )
}

    

export default Login