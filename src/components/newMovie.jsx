import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
class NewMovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "5b21ca3eeb7f6fbccd471818",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: [],
  };
  schema = {
    title: Joi.string().min(5).required().label("Title"),
    genreId: Joi.string().min(5).required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(5)
      .required()
      .label("Daily Rental Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    //console.log(genres, "fff hi fake genres");
  }

  handleSelect = (e) => {
    const data = { ...this.state.data };
    data.genreId = e.currentTarget.value;
    this.setState({ data });
  };
  doSubmit() {
    //call server;
    console.log("submited");
  }
  render() {
    console.log(this.state.data, "fff2 hi,state.data");
    return (
      <div>
        <h1>Movie Form</h1>
        <form className="login" onSubmit={this.handleSubmit}>
          {this.helperInput("title", "Title")}
          <div className="form-group">
            <label htmlFor="genres" className="form-label ">
              Genres
            </label>
            <div className="selection">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={this.handleSelect}
              >
                {this.state.genres.map((genre) => (
                  <option key={genre._id} value={genre._id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {this.helperInput("numberInStock", "Number in Stock")}
          {this.helperInput("dailyRentalRate", "Daily Rental Rate")}
          {this.helperButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
