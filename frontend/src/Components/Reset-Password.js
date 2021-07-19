import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import "../App.css";

export default function ResetPassword() {
  const [state, setState] = useState({
    email: "",
    resetPassword: "",
    message: "",
    loading: false,
    confirmedEmail: false,
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      this.setState({
        loading: true,
      });
    } catch (err) {
      setState({
        message: "Error logging in. Try again later.",
        loading: false,
      });
    }
  };
  const {
    email,
    resetPassword,
    message,
    confirmedEmail,
    loading,
    oldPassword,
    newPassword,
  } = state;
  return (
    <div className="container resetPassword-container">
      {confirmedEmail ? (
        <Redirect to={"/login"} />
      ) : (
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group d-flex justify-content-center mt-5">
            <div className="col-6">
              <label className="header">Confirmation Email:</label>
              <input
                type="text"
                required
                value={email}
                name="email"
                className="form-control mt-2"
                id="email"
                placeholder="Enter Confirmation Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group row d-flex justify-content-center mt-5">
              <div className="col-6">
                <label>Current Password</label>
                <input
                  type="password"
                  value={oldPassword}
                  name="oldPassword"
                  className="form-control"
                  id="oldPassword"
                  placeholder="Current Password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row d-flex justify-content-center mt-4">
              <div className="col-6">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  name="newPassword"
                  className="form-control"
                  id="newPassword"
                  placeholder="New Password"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {message ? <p className="text-danger">{message}</p> : <div></div>}
          <button type="submit" className="btn btn-primary mt-3">
            Send Email
          </button>
        </form>
      )}
      {loading ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
