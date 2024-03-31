import api from './api';

/* export async function getAllCurrent(token) {
  const response = await api.get('/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
} */

export async function getAllCurrent() {
    const response = await api.get('/current');
  
    return response.data;
  }
  