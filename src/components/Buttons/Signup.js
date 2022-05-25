import React from 'react'
const Signup = () => {
  return (
    <>
     <button type="button" className="btn btn-outline-dark ms-2 mx-4 btn-sm" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className="fa fa-user-plus me-1"></span> Register</button>
    
    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Sign Up Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <button className="btn btn-primary w-100 mb-2">Sign in with<span className="fa fa-google mx-2"></span>GMAIL</button>
          <form>
          <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInput"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary w-100">Register</button>
</form> 
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Signup