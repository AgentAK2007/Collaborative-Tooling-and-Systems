import { Task } from '../models/task.model.js';

export const createTask = async (data) => {
  return await Task.create(data);
};

export const getAllTasks = async () => {
  return await Task.find();
};

export const getTaskById = async (id) => {
  return await Task.findById(id);
};

export const updateTask = async (id, updateData) => {
  return await Task.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};
