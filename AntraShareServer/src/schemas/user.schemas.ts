import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  userName: string;

  @Prop({ required: true })
  userEmail: string;

  @Prop()
  userRole: 'user' | 'admin';

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop({ select: false })
  phone: number;

  @Prop({ required: true, select: false })
  passwordHashed: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
