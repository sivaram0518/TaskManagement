import mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  task_Id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
    unique: true,
    index: true,
  },
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ['OPEN', 'INPROGRESS', 'DONE'],
    default: 'OPEN',
    required: true,
  },
  priority: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH'],
    default: 'MEDIUM',
    required: true,
  },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
});
