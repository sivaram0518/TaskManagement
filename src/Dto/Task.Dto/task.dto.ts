export type TaskStatus = 'OPEN' | 'INPROGRESS' | 'DONE';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface TaskDto {
  readonly title: string;
  readonly description: string;
  readonly status?: TaskStatus;
  readonly priority?: TaskPriority;
  readonly dueDate?: Date;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly user_Id: string;
}
