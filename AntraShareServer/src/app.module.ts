import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
