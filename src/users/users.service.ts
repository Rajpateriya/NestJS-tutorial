import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password , 10);
    const user = new this.userModel({
      ...createUserDto,
    password : hashedPassword});
    return user.save();
  }

  //Login user

  async login(email : string , password : string):Promise<User> {
    const user = await this.userModel.findOne({email}).exec();
    if(user && await bcrypt.compare(password , user.password)){
      return user;
    }
    return null;
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
    if(updateUserDto.password){
      const hashedPassword = await bcrypt.hash(updateUserDto.password , 10);
      updateUserDto.password  = hashedPassword;
    }
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  // Delete user by ID
  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
