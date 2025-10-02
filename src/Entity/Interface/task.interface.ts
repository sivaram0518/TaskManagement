export interface Task extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: string;
  readonly dueDate: Date;
  readonly priority: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
