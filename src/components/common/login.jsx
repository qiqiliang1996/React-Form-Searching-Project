import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    //call server
    console.log("form submited");
  };

  render() {
    //console.log(this.state.errors, "hi errors");

    return (
      <div>
        <h1>Login Page</h1>
        <form className="login" onSubmit={this.handleSubmit}>
          {this.helperInput("username", "Username")}
          {this.helperInput("password", "Passwprd", "password")}

          {this.helperButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
