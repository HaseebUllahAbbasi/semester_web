import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="display-3 text-center mb-2" >Contact Page</h1>
        <div className="row">
          <div className="col-4 offset-4">

            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
              </div>
              <div className="form-group form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
