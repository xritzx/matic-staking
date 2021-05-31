import axios from 'axios';
import  { apis }  from "./";

const http = axios.create({
    baseURL: apis.BASE_SERVER_URL,
});


export default http;
export {http}