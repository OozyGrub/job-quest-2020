import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JokeDocument = Joke & Document;

@Schema()
export class Joke {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 0 })
  like: number;

  @Prop({ default: 0 })
  dislike: number;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
