import axios from 'axios';

const API_KEY = 'f1da9cff6fmsh642ecbebcf12a3bp1829fcjsn9b8ccec667e4';

const api = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 30000, 
    headers: {'x-rapidapi-key': API_KEY}

});

export default api

