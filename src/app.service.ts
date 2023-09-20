import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(body: {
    user: string;
    password: string;
    email: string;
  }): Promise<User> {
    const user = new this.userModel(body);
    return await user.save();
  }
}
