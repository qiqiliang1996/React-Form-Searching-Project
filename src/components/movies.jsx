import React from "react";

// import "font-awesome/css/font-awesome.css";

import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";

import _ from "lodash";
import { Link } from "react-router-dom";

import { getGenres } from "../services/fakeGenreService";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    currentGenre: { _id: "allGenres", name: "All Genres" },
    sortColumn: { path: "title", order: "asc" },
    tableHeads: ["Title", "Genre", "Stock", "Rate", ""],
    pageSize: 4,
    currentPage: 1,
    searchValue: "",
  };

  componentDidMount() {
    //const genres = await getGenres(); // this is for call the real server
    const genres = getGenres();

    this.setState({
      //movies: await getMovies(), // this is for call the real server
      movies: getMovies(),
      genres: [{ _id: "allGenres", name: "All Genres" }, ...genres],
    });
  }

  onPaginationChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    const movieInDb = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movieInDb });

    try {
      //await deleteMovie(movie);
      deleteMovie(movie);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("sorry, this post has been deletedå");
        this.setState({ movies: originalMovies });
      }
    }
  };

  handleMessage = (moviesLength) => {
    if (moviesLength !== 0) {
      return `There are ${moviesLength} movies on your list`;
    }
  };

  handleLike = (movie) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    //console.log(this.state.movies[0]);
    this.setState({ movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  onGenreChange = (genre) => {
    //console.log(genre.name, "hi current genre");
    this.setState({ currentGenre: genre, searchValue: "", currentPage: 1 });
  };

  handleSearch = (e) => {
    const searchValue = e.target.value;
    this.setState({ searchValue, currentGenre: {}, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      currentGenre,
      sortColumn,
      searchValue,
    } = this.state;

    //

    //

    let filterMovies = allMovies;
    if (searchValue) {
      filterMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (currentGenre.name === "All Genres") {
      filterMovies = allMovies;
    } else {
      filterMovies = allMovies.filter(
        (m) => m.genre.name === currentGenre.name
      );
    }

    //
    //

    // const filterGrenreMovies =
    //   currentGenre.name === "All Genres"
    //     ? allMovies
    //     : allMovies.filter((m) => m.genre.name === currentGenre.name);

    const sorted = _.orderBy(filterMovies, sortColumn.path, sortColumn.order);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filterMovies.length, data: movies };
  };

  render() {
    //console.log(this.state.movies, "hi movies!!!!");
    const { genres, pageSize, currentPage, currentGenre, sortColumn } =
      this.state;

    // console.log(searchFilterMovie, "hi???");

    const result = this.getPagedData();

    return (
      <div className="d-flex flex-row m-3">
        <div className="m-3 col-2">
          <ListGroup
            items={genres}
            onItemChange={this.onGenreChange}
            currentItem={currentGenre}
          />
        </div>
        <div className="m-3 col">
          <div>
            <button type="button" className="btn btn-primary">
              <Link
                to="/movies/new"
                style={{ color: "white", textDecoration: "none" }}
              >
                New Movies
              </Link>
            </button>
          </div>

          <p>Showing {result.totalCount} movies in the database.</p>
          {/* <div>{this.handleMessage(result.totalCount)}</div> */}
          {/* <div>{`There are ${result.totalCount} movies on your list`}</div> */}

          <div className="searchbox">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchValue}
                onChange={this.handleSearch}
              />
            </form>
          </div>

          <MoviesTable
            movies={result.data}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemCount={result.totalCount}
            pageSize={pageSize}
            onPaginationChange={this.onPaginationChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
