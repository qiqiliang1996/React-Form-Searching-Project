import http from './httpServicess';

export const getGenres = async () => {
  const { data } = await http.get('/genres');
  //console.log(data,'hi get genres from server')
  return data;
};
