import api from './api';

/* export async function getAllCurrent(token) {
  const response = await api.get('/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
} */

export async function getAllPedestrian() {
    const response = await api.get('/pedestrian');
  
    return response.data;
  }
  