import React from "react";
import Form from "./form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      legalName: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().min(5),
    legalName: Joi.string().min(8).label("Name"),
  };
  doSubmit = () => {
    //call server
    console.log("form submited");
  };
  render() {
    return (
      <div>
        <h1>Register Page</h1>
        <form className="register" onSubmit={this.handleSubmit}>
          {this.helperInput("username", "Username")}
          {this.helperInput("password", "Passwprd", "password")}
          {this.helperInput("legalName", "Name")}

          {this.helperButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
