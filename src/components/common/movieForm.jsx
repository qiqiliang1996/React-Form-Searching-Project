import React from "react";
import Joi from "joi-browser";
import { getGenres } from "../../services/fakeGenreService";
import { getMovie, saveMovie } from "../../services/fakeMovieService";
import Form from "./form";

//

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: [],
  };
  schema = {
    _id: Joi.string(),
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

  polupateGenres() {
    //const genres = await getGenres(); //for real server

    const genres = getGenres();
    this.setState({ genres });
  }

  populateMovie() {
    const movieId = this.props.match.params.id;
    if (movieId === "new") {
      return;
    }

    try {
      //const movie = await getMovie(movieId); //for real server

      const movie = getMovie(movieId);
      //console.log(movie, "222");
      const data = this.mapMovieToView(movie);
      this.setState({ data });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.props.history.replace("/notFound");
      }
    }
  }

  componentDidMount() {
    //await this.polupateGenres();
    //await this.populateMovie();

    this.polupateGenres();
    this.populateMovie();
  }
  //

  mapMovieToView = (movie) => {
    //console.log("fff2", movie);
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  handleSelect = (e) => {
    const data = { ...this.state.data };
    data.genreId = e.currentTarget.value;
    this.setState({ data });
  };

  //

  doSubmit() {
    //const result = await saveMovie(this.state.data);  // real server call
    const result = saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log("submited");
  }

  render() {
    //console.log(this.state.data.genreId, "fff,hi genreeeeeeId");
    //console.log(this.state.data, "hi state datasss");
    return (
      <div>
        <h1>Movie Form</h1>
        <form className="login" onSubmit={this.handleSubmit}>
          {this.helperInput("title", "Title")}
          {this.helperSelection("genres", "Genres")}
          {this.helperInput("numberInStock", "Number in Stock")}
          {this.helperInput("dailyRentalRate", "Daily Rental Rate")}
          {this.helperButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
