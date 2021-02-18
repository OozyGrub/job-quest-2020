import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokeModule } from './joke/joke.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      useNewUrlParser: true,
    }),
    JokeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
