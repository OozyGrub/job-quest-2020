import { Module } from '@nestjs/common';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';
import { Joke, JokeSchema } from './joke.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
  ],
  providers: [JokeService],
  controllers: [JokeController],
})
export class JokeModule {}
