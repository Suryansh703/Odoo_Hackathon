import api from "./api";

export const getMaintenance = () =>
  api.get("/maintenance");

export const getMaintenanceById = (id) =>
  api.get(`/maintenance/${id}`);

export const createMaintenance = (maintenance) =>
  api.post("/maintenance", maintenance);

export const updateMaintenance = (id, maintenance) =>
  api.put(`/maintenance/${id}`, maintenance);

export const deleteMaintenance = (id) =>
  api.delete(`/maintenance/${id}`);