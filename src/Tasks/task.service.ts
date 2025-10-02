import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import type { TaskDto } from 'src/Dto/task.dto';
import { Task } from 'src/Entity/Interface/task.interface';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private TaskModel: Model<Task>) {}

  async get(): Promise<Task[]> {
    return await this.TaskModel.find();
  }

  async createTask(task: TaskDto): Promise<Task> {
    const newTask = new this.TaskModel(task);
    return newTask.save();
  }
}
