import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:9050/'
});

export default Api;