import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schemas';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(email: string, passwordHashed: string) {
    const user = await this.userModel
      .findOne({ userEmail: email })
      .select('+passwordHashed')
      .exec();
    if (!(user && user.passwordHashed === passwordHashed)) {
      throw new UnauthorizedException();
    }

    //TODO: add jwt token
    return user;
  }
}
