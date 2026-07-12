import api from "./api";

export const getFuel = () => api.get("/fuel");

export const getFuelById = (id) =>
  api.get(`/fuel/${id}`);

export const createFuel = (fuel) =>
  api.post("/fuel", fuel);

export const updateFuel = (id, fuel) =>
  api.put(`/fuel/${id}`, fuel);

export const deleteFuel = (id) =>
  api.delete(`/fuel/${id}`);