import { Types } from 'mongoose';
import { Task } from './task.interface';

export interface User extends Document {
  readonly user_id: Types.ObjectId;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdDate?: Date;
  readonly updatedDate?: Date;
  readonly relatedTasks?: Types.ObjectId[] | Task[];
}
