import { Module } from '@nestjs/common';
import { StrayDogsService } from './stray-dogs.service';
import { StrayDogsController } from './stray-dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrayDog } from './entities/stray-dog.entity';

@Module({
  controllers: [StrayDogsController],
  providers: [StrayDogsService],
  imports: [
    TypeOrmModule.forFeature([StrayDog])
  ]
})
export class StrayDogsModule { }
