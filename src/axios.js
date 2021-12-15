import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://connection-jam.herokuapp.com/',
});

export default instance;