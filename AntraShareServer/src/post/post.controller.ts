import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get()
  getPosts() {
    //TODO
  }

  @Get('/:id')
  getPostById() {
    //TODO
  }

  @Post()
  createPost() {
    //TODO
  }

  @Delete('/:id')
  deletePost() {
    //TODO
  }

  @Get('/:id/comments')
  getCommentsByPostId() {
    //TODO
  }

  @Post('/:id/comments')
  createCommentByPostId() {
    //TODO
  }

  @Delete('/comments/:commentId')
  deleteCommentById() {
    //TODO
  }
}
