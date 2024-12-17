import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto'; // Import DTOs
import { UpdateUserDto } from './dto/update-user.dto'; // Import DTOs

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  // Get all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Get a user by ID
  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  // Update user by ID
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  // Delete user by ID
  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
