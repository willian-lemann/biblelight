import axios from 'axios';

const galeryApi = axios.create({
    baseURL: 'https://api.unsplash.com',
});

export default galeryApi;