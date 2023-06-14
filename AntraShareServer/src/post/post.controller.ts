import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCommentDto, CreatePostDto } from './post.model';

@Controller('post')
export class PostController {
  @Get()
  getPosts() {
    //TODO
  }

  @Get('/:id')
  getPostById(@Param('id') id: string) {
    //TODO
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createPost(@Body() createPostDto: CreatePostDto) {
    //TODO
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    //TODO
  }

  @Get('/:id/comments')
  getCommentsByPostId(@Param('id') id: string) {
    //TODO
  }

  @Post('/:id/comments')
  @UsePipes(new ValidationPipe())
  createCommentByPostId(
    @Param('id') id: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    //TODO
  }

  @Delete('/comments/:commentId')
  deleteCommentById(@Param('commentId') commentId: string) {
    //TODO
  }
}
