import { connectDB, disconnectDB } from './config/db.js';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} from './services/task.service.js';

const run = async () => {
  await connectDB();

  const created = await createTask({ title: 'Finish EPITA Collaborative Tooling lab' });
  console.log('Created:', created);

  const all = await getAllTasks();
  console.log('All tasks count:', all.length);

  const found = await getTaskById(created._id);
  console.log('Found by ID:', found.title);

  const updated = await updateTask(created._id, { completed: true });
  console.log('Updated:', updated.completed);

  await deleteTask(created._id);
  console.log('Deleted task successfully');

  await disconnectDB();
};

run();
