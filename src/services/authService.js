import api from './api';

export const loginUser = (credentials) => api.post("Auth/login",credentials);