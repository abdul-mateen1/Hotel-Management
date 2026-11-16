import api from './api';
 
export const getPaginatedRooms = async (page = 1, pageSize = 10) => {
  const response = await api.get("/Room", {
    params: { page, pageSize }
  });
  return response.data;
};

export const createRoom = (roomData) => api.post("/Room", roomData);
export const getRoomById = (id) => api.get(`Room/${id}`);
export const updateRoomById = (id, roomData) => api.put(`Room/${id}`, roomData);
export const deleteRoomById = (id) => api.delete(`Room/${id}`);



