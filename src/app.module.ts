import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:Z47RWyhyjLhib3LU@cluster0.tf5lt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
