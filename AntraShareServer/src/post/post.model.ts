import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  text: string;
  image?: string;
  video?: string;
}

export class CreateCommentDto {
  @IsNotEmpty()
  text: string;
  image?: string;
  video?: string;
}
