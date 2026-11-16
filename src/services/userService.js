import api from './api';
 
export const getPaginatedUsers = async (page = 1, pageSize = 10) => {
  const response = await api.get("/User", {
    params: { page, pageSize }
  });
  return response.data;
};

export const createUser = (userData) => api.post("/User", userData);
export const getUserById = (id) => api.get(`User/${id}`);
export const updateUserById = (id, userData) => api.put(`User/${id}`, userData);
export const deleteUserById = (id) => api.delete(`User/${id}`);
