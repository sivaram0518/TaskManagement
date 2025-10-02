import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/Entity/Interface/task.interface';
import type { TaskDto } from 'src/Dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTask(): Promise<Task[]> {
    return await this.taskService.get();
  }

  @Post()
  async createTask(@Body() task: TaskDto): Promise<Task> {
    return await this.taskService.createTask(task);
  }
}
