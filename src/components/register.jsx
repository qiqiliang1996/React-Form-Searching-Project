import React from 'react'
import Form from './common/form'
import Joi from "joi-browser";
import { register } from "../services/registerService";
import { loginWithJwt } from '../services/authService';


export default class Register extends Form {
    state = {
        data: {
          name: "",
          email: "",
          password: "",
   
        },
        errors: {},
   
      };
      schema = {
        name: Joi.string(),
        email: Joi.string().min(5).email().required().label("Email"),
        password: Joi.string().min(6).required().label("Password"),
        
      };

      async doSubmit() {
        
        try {
        const response = await register(this.state.data);
        console.log(response,'response register.js 111')
        loginWithJwt(response)
         window.location = '/'
  
        } catch (ex) {
          // console.log(ex.response, 'what is res?')
         if(ex.response && ex.response.status === 400){
           const errors = {...this.state.errors}
           errors.email = ex.response.data
           this.setState({errors})
         }
        }
      }
  render() {
    return (
        <div>
        <h1>Register </h1>
        <form className="register" onSubmit={this.handleSubmit}>
          {this.helperInput("name", "Name")}
          {this.helperInput("email", "Email")}
          {this.helperInput("password", "Password")}
          {this.helperButton("Register")}
        </form>
      </div>
    )
  }
}
