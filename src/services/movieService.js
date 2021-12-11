import http from './httpServicess';
//import config from '../config.json';

const movieApiEndpoint = '/movies';

function movieUrl (moiveId){
    return movieApiEndpoint+ '/' + moiveId
}

export const getMovies = async ()=>{
    const {data} = await http.get(movieApiEndpoint );
    //console.log(data,'hi get movies from server')
    return data;
};

export const getMovie = async (moiveId) =>{
    const {data} = await http.get(movieUrl (moiveId));
    //console.log(data,'111 hi get movies from server')
    return data;
}

export const saveMovie = async (movie) =>{
    console.log(movie,'111');
    if(movie._id){
     const body = {...movie};
     delete body._id;
     const {data} = await http.put(movieUrl (movie._id), body );
     //console.log(data,'22222');
     return;
    }
 
    await http.post(movieApiEndpoint,movie)
 
 
   }


   export const deleteMovie = async (movie)=>{
     await http.delete(movieUrl (movie._id));
     const {data} = await http.get(movieApiEndpoint);
    return data;
}