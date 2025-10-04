import { Types } from 'mongoose';

export type TaskStatus = 'OPEN' | 'INPROGRESS' | 'DONE';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface UpdateTaskDto {
  readonly title?: string;
  readonly description?: string;
  readonly status?: TaskStatus;
  readonly priority?: TaskPriority;
  readonly dueDate?: Date;
  readonly updatedAt?: Date;
}
