import { Types } from 'mongoose';
import { User } from './user.interface';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Task extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: TaskStatus;
  readonly priority: TaskPriority;
  readonly dueDate: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user_Id: string;
  readonly user: Types.ObjectId | User;
}
