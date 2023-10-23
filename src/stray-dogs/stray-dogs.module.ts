import { Module } from '@nestjs/common';
import { StrayDogsService } from './stray-dogs.service';
import { StrayDogsController } from './stray-dogs.controller';

@Module({
  controllers: [StrayDogsController],
  providers: [StrayDogsService],
})
export class StrayDogsModule {}
