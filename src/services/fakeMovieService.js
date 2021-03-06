import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "A Love Story of Kiki & Chubby",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 1,
    dailyRentalRate: 1.1,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked:true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Baby Chubby",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 2,
    dailyRentalRate: 2.2
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Cat Lover",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock:3 ,
    dailyRentalRate: 3.3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "David on board",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action"  },
    numberInStock: 4,
    dailyRentalRate: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Electrical Dance",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock:5 ,
    dailyRentalRate: 4.1
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Fishy Fishy",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
    numberInStock: 6,
    dailyRentalRate: 4.2
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Girls Party",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
    numberInStock: 7,
    dailyRentalRate: 4.3
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Hell Yeah Chubby is One",
    genre: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
    numberInStock: 8,
    dailyRentalRate: 4.4
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Ice Cream",
    genre: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
    numberInStock: 9,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182111",
    title: "JSON",
    genre: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 10,
    dailyRentalRate: 4.6
  },
    {
    _id: "5b21ca3eeb7f6fbccd471822222",
    title: "Kiki is moving forward",
    genre: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
    numberInStock: 11,
    dailyRentalRate: 4.7
  }
  // {
  //   _id: "5b21ca3eeb7f6fbccd471823333",
  //   title: "12 The Bae Chubby",
  //   genre: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
  //   numberInStock: 12,
  //   dailyRentalRate: 3.5
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd47182111114",
  //   title: "13 The Sad Story",
  //   genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
  //   numberInStock: 13,
  //   dailyRentalRate: 3.5
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd47182111115",
  //   title: "14 The Story of Chubby",
  //   genre: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  //   numberInStock: 14,
  //   dailyRentalRate: 3.5
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd47182111116",
  //   title: "15 This Website is for Chubby",
  //   genre: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
  //   numberInStock: 15,
  //   dailyRentalRate: 3.5
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd47182111117",
  //   title: "16 The Beautiful Cat",
  //   genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
  //   numberInStock: 16,
  //   dailyRentalRate: 3.5
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd47182111117",
  //   title: "17 The Wonderful Day",
  //   genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
  //   numberInStock: 17,
  //   dailyRentalRate: 3.5
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd47182111117",
  //   title: "18 The Start",
  //   genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
  //   numberInStock: 18,
  //   dailyRentalRate: 3.5
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd47182111117",
  //   title: "19 Changing is Difficult",
  //   genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
  //   numberInStock: 19,
  //   dailyRentalRate: 3.5
  // }
  
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = String(Date.now());
    movies.push(movieInDb);
    
  }
  //return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movies;
}
