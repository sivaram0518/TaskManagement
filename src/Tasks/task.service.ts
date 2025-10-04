import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import type { TaskDto } from 'src/Dto/Task.Dto/task.dto';
import { UpdateTaskDto } from 'src/Dto/Task.Dto/updateTask.dto';
import { UpdateStatusTask } from 'src/Dto/Task.Dto/updateTaskStatus.dto';
import { Task } from 'src/Entity/Interface/task.interface';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private TaskModel: Model<Task>) {}

  async getTask(): Promise<Task[]> {
    return await this.TaskModel.find();
  }

  async getTaskFilterByStatus(status: string): Promise<Task[] | null> {
    return this.TaskModel.find({ status: status });
  }

  async getTaskById(id: string): Promise<Task | null> {
    return await this.TaskModel.findById(id);
  }

  async getTasksByUser(
    user: { userid: string } | string,
  ): Promise<Task[] | null> {
    let userIdToUse: string;
    if (typeof user === 'string') {
      userIdToUse = user;
    } else {
      userIdToUse = user.userid;
    }
    return this.TaskModel.find({ user_Id: userIdToUse });
  }

  async createTask(task: TaskDto): Promise<Task> {
    const newTask = new this.TaskModel(task);
    return newTask.save();
  }

  async updateTask(id: string, updateTask: UpdateTaskDto): Promise<string> {
    const result = await this.TaskModel.findByIdAndUpdate(id, updateTask, {
      new: true,
    });
    if (result) {
      return 'Task updated successfully';
    } else {
      throw new Error('Task not found');
    }
  }

  async updateTaskStatus(
    id: string,
    status: UpdateStatusTask,
  ): Promise<string> {
    const result = await this.TaskModel.findByIdAndUpdate(id, status, {
      new: true,
    });
    if (result) {
      return 'Task updated successfully';
    } else {
      throw new Error('Task not found');
    }
  }

  async deleteTask(id: string): Promise<string> {
    const result = await this.TaskModel.findByIdAndDelete(id);
    if (result) {
      return 'Task has been deleted';
    } else {
      return 'Task not found';
    }
  }
}
