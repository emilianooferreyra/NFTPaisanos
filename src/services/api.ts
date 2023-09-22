import axios from 'axios';

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: baseApiUrl,
  method: 'get',
  headers: {
    apiKey: apiKey || '',
  },
});

export const getCurrentETHPrice = async () => {
  try {
    const response = await axiosInstance.get('/nfpaisanos/eth-price');
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener el precio de ETH: ${(error as Error).message}`);
  }
};

export const getPopularAuctions = async () => {
  try {
    const response = await axiosInstance.get('/nfpaisanos/popular');
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener subastas populares: ${(error as Error).message}`);
  }
};

export const getAuctions = async () => {
  try {
    const response = await axiosInstance.get('/nfpaisanos/aunctions');
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener todas las subastas: ${(error as Error).message}`);
  }
};
