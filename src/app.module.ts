import { Module } from '@nestjs/common';
import { Users } from './users.controller';


@Module({
  imports: [],
  controllers: [Users],
  providers: [],
})
export class AppModule {}
