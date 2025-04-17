import axios from 'axios';

const API_KEP_URL = `${import.meta.env.VITE_API_BASE_URL}`;
const API_ID_URL = `${import.meta.env.VITE_API_ID_URL}`;

export const kepService = {
    getAllkeps: async () => {
        try {
            const response = await axios.get(API_KEP_URL);
            return response.data;
        }
        catch (error) {
            throw new Error('failed to fetch data: ' + error.message);
        }
    },

    getKepById: async (id) => {
        try {
            const response = await axios.get(`${API_ID_URL}/${id}`);
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch data for : ${id}: ` + error.message);
        }
    }
}
