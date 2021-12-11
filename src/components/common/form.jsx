import React from "react";
import Joi from "joi-browser";
import Input from "./input";
import Selections from "./selections";
class Form extends React.Component {
  state = {
    data: {},
    errors: {},
    genres: [],
  };
  validation = () => {
    //console.log("validation(),work??");
    const { data } = this.state;
    const errors = {};
    const result = Joi.validate(data, this.schema, { abortEarly: false });
    //console.log(result, "hi joi result");
    if (!result.error) {
      return null;
    }
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    //console.log(errors, "hi hi hi");
    return errors;

    // //

    // //
    // if (account.username.trim() === "") {
    //   errors.username = "username should not  be empty";
    // }
    // if (account.password.trim() === "") {
    //   errors.password = "password should not be empty";
    // }
    // //console.log(Object.keys(errors).length, "l");
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validationProperty = (currentTarget) => {
    const obj = { [currentTarget.name]: currentTarget.value };
    const schema = { [currentTarget.name]: this.schema[currentTarget.name] };
    const result = Joi.validate(obj, schema);
    if (!result.error) {
      return null;
    } else {
      return result.error.details[0].message;
    }

    // if (currentTarget.name === "username") {
    //   if (currentTarget.value.trim() === "") {
    //     return "username should not be empty";
    //   }
    // } else if (currentTarget.name === "password") {
    //   if (currentTarget.value.trim() === "") {
    //     return "password should not be empty";
    //   }
    // } else {
    //   return null;
    // }
  };

  handleSubmit = (e) => {
    //console.log("submit,work??");
    e.preventDefault();

    const errors = this.validation();
    //console.log(errors, "hi error");
    this.setState({ errors: errors || {} });
    if (errors != null) {
      return;
    }

    this.doSubmit();
  };

  handleChange = (e) => {
    const { currentTarget } = e;
    const errors = { ...this.state.errors };
    const errorMessage = this.validationProperty(currentTarget);
    if (errorMessage) {
      errors[currentTarget.name] = errorMessage;
    } else {
      delete errors[currentTarget.name];
    }

    //
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data, errors });
    //console.log(data, "hi on change");
  };

  handleSelect = (e) => {
    const data = { ...this.state.data };
    data.genreId = e.currentTarget.value;
    this.setState({ data });
  };

  helperInput(name, label, type = "text") {
    //  console.log("fff", this.state.data);
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  helperSelection(name, label) {
    const { genres, data } = this.state;
    return (
      <Selections
        name={name}
        label={label}
        options={genres}
        data={data}
        onChange={this.handleSelect}
      />
    );
  }

  helperButton(label) {
    return (
      <button disabled={this.validation()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
