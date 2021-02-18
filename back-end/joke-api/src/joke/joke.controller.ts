import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller('joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}
  @Get('')
  getAllJokes() {
    return this.jokeService.findAll();
  }

  @Post('')
  addNewJoke(@Body() data: JokeDTO) {
    return this.jokeService.create(data);
  }

  @Get('/:id')
  getJoke(@Param('id') id: string) {
    return this.jokeService.read(id);
  }

  @Put('/:id/like')
  likeJoke(@Param('id') id: string) {
    return this.jokeService.like(id);
  }

  @Put('/:id/dislike')
  disLikeJoke(@Param('id') id: string) {
    return this.jokeService.disLike(id);
  }
}
