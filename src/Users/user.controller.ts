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
import type { UserDto } from 'src/Dto/User.Dto/user.dto.ts';
import { User } from 'src/Entity/Interface/user.interface';
import type { UpdateUserDto } from 'src/Dto/User.Dto/updateUser.dto.ts';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUser(): Promise<User[]> {
    return await this.userService.getUser();
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: string): Promise<Object | null> {
    if (!userId) {
      throw new Error('ID parameter is required');
    }
    return await this.userService.getUserById(userId);
  }

  @Post()
  async createUser(@Body() user: UserDto): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<string> {
    return await this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    return await this.userService.deleteUser(id);
  }
}
