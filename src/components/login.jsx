import React from 'react'
import Form from './common/form'
import Joi from "joi-browser";
import { login } from "../services/authService";


export default class Login extends Form {
    state = {
        data: {
          email: "",
          password: "",
        },
        errors: {},
      };
      schema = {
        email: Joi.string().min(5).email().required().label("Email"),
        password: Joi.string().min(6).required().label("Password"),
        
      };
      


      async doSubmit() {
        
        
        try {
          await login(this.state.data);
          window.location = '/'
        } catch (ex) {
          console.log(ex.response, 'what is res?')
         if(ex.response && ex.response.status === 400){
           const errors = {...this.state.errors}
           errors.email = ex.response.data
           this.setState({errors})
         }
        }
      }


  render() {
    console.log(this.props, 'props from login.js')
    return (
        <div>
        <h1>Login </h1>
        <form className="login" onSubmit={this.handleSubmit}>

          {this.helperInput("email", "Email")}
          {this.helperInput("password", "Password")}
          {this.helperButton("Login")}
        </form>
      </div>
    )
  }
}
