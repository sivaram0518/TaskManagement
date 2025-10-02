import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/Entity/Interface/user.interface';
import { UserDto } from 'src/Dto/user.dto';
import { UpdateUserDto } from 'src/Dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private UserModel: Model<User>) {}

  async getUser(): Promise<User[]> {
    return await this.UserModel.find();
  }

  async getUserById(id: string): Promise<Object | null> {
    return await this.UserModel.findById(id);
  }

  async createUser(user: UserDto): Promise<User> {
    const newUser = new this.UserModel(user);
    return newUser.save();
  }

  async updateUser(updateUser: UpdateUserDto): Promise<string> {
    const result = await this.UserModel.findOneAndUpdate(
      { email: updateUser.email },
      updateUser,
      { new: true },
    );
    if (result) {
      return 'User updated successfully';
    } else {
      throw new Error('User not found');
    }
  }

  async deleteUser(id: string): Promise<string> {
    const result = await this.UserModel.findByIdAndDelete(id);
    if (result) {
      return 'User has been deleted';
    } else {
      return 'User not found';
    }
  }
}
