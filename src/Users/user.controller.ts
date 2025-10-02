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
import { UserService } from './user.service';
import type { UserDto } from 'src/Dto/user.dto';
import { User } from 'src/Entity/Interface/user.interface';
import type { UpdateUserDto } from 'src/Dto/updateUser.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUser(): Promise<User[]> {
    return await this.userService.getUser();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<Object | null> {
    if (!id) {
      throw new Error('ID parameter is required');
    }
    return await this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: UserDto): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Patch()
  async updateUser(@Body() user: UpdateUserDto): Promise<string> {
    return await this.userService.updateUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return await this.userService.deleteUser(id);
  }
}
