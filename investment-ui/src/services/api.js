import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',  // Your Django backend URL
});

// Example: API call to get investment packages
export const getInvestmentPackages = async () => {
  try {
    const response = await API.get('/packages/');
    return response.data;
  } catch (error) {
    console.error('Error fetching investment packages:', error);
  }
};

export default API;