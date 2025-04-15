import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/keps`; // API URL

export const getAllKeps = () => {
    return axios.get(API_URL);
};
