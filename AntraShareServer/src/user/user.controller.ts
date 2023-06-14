import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.model';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    //TODO
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    //TODO
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    //TODO
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //TODO
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    //TODO
  }
}
