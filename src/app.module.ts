import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.MY_DATABASE, {
          }),
    UsersModule,
  ],
})
export class AppModule {}
