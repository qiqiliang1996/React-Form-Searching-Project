import React from "react";

import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";

import _ from "lodash";
import { Link } from "react-router-dom";
import { getGenres } from "../services/genreService";
import { getMovies, deleteMovie } from "../services/movieService";

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

  async componentDidMount() {
    const genres = await getGenres(); 
    // const genres = getGenres();

    this.setState({
      movies: await getMovies(), // this is for call the real server
      // movies: getMovies(),
      genres: [{ _id: "allGenres", name: "All Genres"},...genres ],
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
      await deleteMovie(movie);
      // deleteMovie(movie);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("sorry, this post has been deletedå");
        this.setState({ movies: originalMovies });
      }
      this.setState({ movies: originalMovies });
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

    const sorted = _.orderBy(filterMovies, sortColumn.path, sortColumn.order);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filterMovies.length, data: movies };
  };

  render() {
    //console.log(this.state.movies, "hi movies!!!!");
    const { genres, pageSize, currentPage, currentGenre, sortColumn } =
      this.state;
    const {user} = this.props
    const result = this.getPagedData();

    // console.log(user,'user from props?')
    return (
      <div className="d-flex flex-row mt-4">
        <div className="m-2 col-2">
          <ListGroup
            items={genres}
            onItemChange={this.onGenreChange}
            currentItem={currentGenre}
          />
        </div>
        <div className="m-2 col">
         { user&&<div>
            <button type="button" className="btn btn-primary">
              <Link
                to="/movies/new"
                style={{ color: "white", textDecoration: "none" }}
              >
                New Movies
              </Link>
            </button>
          </div>}

          <p>Showing {result.totalCount} movies in the database.</p>

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
