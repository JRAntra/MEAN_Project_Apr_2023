import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schemas';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async login(email: string, passwordHashed: string) {
    const user = await this.userModel
      .findOne({ userEmail: email })
      .select('+passwordHashed')
      .exec();
    if (!(user && user.passwordHashed === passwordHashed)) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user._id,
      userEmail: user.userEmail,
      userRole: user.userRole,
    };

    const jwt = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
    });

    return {
      access_token: jwt,
    };
  }
}
