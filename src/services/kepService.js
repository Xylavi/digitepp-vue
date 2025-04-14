import axios from 'axios';

const API_URL = 'http://localhost:8000/api/keps'; // API URL

export const getAllKeps = () => {
    return axios.get(API_URL);
};
