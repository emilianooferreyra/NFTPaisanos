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
    throw new Error(`Error getting the price of ETH: ${(error as Error).message}`);
  }
};

export const getPopularAuctions = async () => {
  try {
    const response = await axiosInstance.get('/nfpaisanos/popular');
    return response.data;
  } catch (error) {
    throw new Error(`Error in obtaining popular auctions: ${(error as Error).message}`);
  }
};

export const getAuctions = async () => {
  try {
    const response = await axiosInstance.get('/nfpaisanos/aunctions');
    return response.data;
  } catch (error) {
    throw new Error(`Error getting all auctions: ${(error as Error).message}`);
  }
};
