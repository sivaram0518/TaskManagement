export type TaskStatus = 'OPEN' | 'INPROGRESS' | 'DONE';

export interface UpdateStatusTask {
  readonly status: TaskStatus;
}
