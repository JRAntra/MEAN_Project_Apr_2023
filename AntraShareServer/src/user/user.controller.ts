import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    //TODO
  }

  @Get('/:id')
  getUserById() {
    //TODO
  }

  @Post()
  createUser() {
    //TODO
  }

  @Patch('/:id')
  updateUser() {
    //TODO
  }

  @Delete('/:id')
  deleteUser() {
    //TODO
  }
}
