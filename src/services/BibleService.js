import axios from 'axios';

const bibleApi = axios.create({
    baseURL: 'https://bibleapi.co/api',
});

export default bibleApi;