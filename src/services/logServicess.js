//import Raven from "raven-js";

function init(){
//    Raven.config('https://d31cf666a6bc4656a6e0af2de7674ec2@o389818.ingest.sentry.io/6067258',{
//     release:'1-0-0',
//     environment:'development-test ',
//     }).install()
  
}

function logError(error){
    console.error(error)
    // Raven.captureException(error);
}


export default {
init,
logError

}