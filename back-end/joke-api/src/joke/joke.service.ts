import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke, JokeDocument } from './joke.schema';

type JokeRO = {
  _id: string;
  name: string;
  like: number;
  dislike: number;
};

@Injectable()
export class JokeService {
  constructor(@InjectModel(Joke.name) private jokeModel: Model<JokeDocument>) {}

  toResponseObjectArray(jokes: JokeDocument[]): JokeRO[] {
    const jokeROA = jokes.map((j) => {
      return this.toResponseObject(j);
    });
    return jokeROA;
  }

  toResponseObject(joke: JokeDocument): JokeRO {
    const { _id, name, like, dislike } = joke;
    return { _id, name, like, dislike };
  }

  async findAll(): Promise<Joke[]> {
    const jokes = await this.jokeModel.find().exec();
    return this.toResponseObjectArray(jokes);
  }

  async create(data: JokeDTO): Promise<Joke> {
    const joke = new this.jokeModel(data);
    await joke.save();
    return this.toResponseObject(joke);
  }

  async read(id): Promise<Joke> {
    const joke = await this.jokeModel.findById(id);
    return this.toResponseObject(joke);
  }

  async like(id): Promise<Joke> {
    const joke = await this.jokeModel.findById(id);
    await this.jokeModel.updateOne({ _id: id }, { like: joke.like + 1 });
    const updatedJoke = await this.jokeModel.findById(id);
    return this.toResponseObject(updatedJoke);
  }
  //
  async disLike(id): Promise<Joke> {
    const joke = await this.jokeModel.findById(id);
    await this.jokeModel.updateOne(
      { _id: id },
      {
        dislike: joke.dislike + 1,
      },
    );
    const updatedJoke = await this.jokeModel.findById(id);
    return this.toResponseObject(updatedJoke);
  }
}
