import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/Entity/Interface/task.interface';
import type { TaskDto } from 'src/Dto/Task.Dto/task.dto';
import type { UpdateTaskDto } from 'src/Dto/Task.Dto/updateTask.dto';
import type { UpdateStatusTask } from 'src/Dto/Task.Dto/updateTaskStatus.dto';

@Controller('api/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTask(@Query('status') status: string): Promise<Task[] | null> {
    if (status) {
      return await this.taskService.getTaskFilterByStatus(status.toUpperCase());
    }
    return await this.taskService.getTask();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task | null> {
    return this.taskService.getTaskById(id);
  }

  @Get('user/:userId')
  async getTasksByUser(@Param('userId') userId: string): Promise<Task[] | null> {
    return this.taskService.getTasksByUser(userId);
  }

  @Post()
  async createTask(@Body() task: TaskDto): Promise<Task> {
    return await this.taskService.createTask(task);
  }

  @Patch(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaks: UpdateTaskDto,
  ): Promise<string> {
    return await this.taskService.updateTask(id, updateTaks);
  }

  @Patch(':id')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body() status: UpdateStatusTask,
  ): Promise<string> {
    return await this.taskService.updateTaskStatus(id, status);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<string> {
    return await this.taskService.deleteTask(id);
  }
}
