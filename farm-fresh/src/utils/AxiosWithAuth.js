import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://farm-fresh-backend.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth
