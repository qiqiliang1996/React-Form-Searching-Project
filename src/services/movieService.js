import http from './httpServicess';

const movieApiEndpoint = '/movies';

export const getMovies = async () => {
  const { data } = await http.get(movieApiEndpoint);
  return data;
};

export const getMovie = async (moiveId) => {
  const { data } = await http.get(movieApiEndpoint + '/' + moiveId);
  return data;
};

export const saveMovie = async (movie) => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    await http.put(movieApiEndpoint + '/' + movie._id, body);
    return;
  }

  await http.post(movieApiEndpoint, movie);
};

export const deleteMovie = async (movie) => {
  await http.delete(movieApiEndpoint + '/' + movie._id);
  const { data } = await http.get(movieApiEndpoint);
  return data;
};
