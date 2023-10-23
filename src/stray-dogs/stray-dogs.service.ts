import { Injectable } from '@nestjs/common';
import { CreateStrayDogDto } from './dto/create-stray-dog.dto';
import { UpdateStrayDogDto } from './dto/update-stray-dog.dto';

@Injectable()
export class StrayDogsService {
  create(createStrayDogDto: CreateStrayDogDto) {
    return 'This action adds a new strayDog';
  }

  findAll() {
    return `This action returns all strayDogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} strayDog`;
  }

  update(id: number, updateStrayDogDto: UpdateStrayDogDto) {
    return `This action updates a #${id} strayDog`;
  }

  remove(id: number) {
    return `This action removes a #${id} strayDog`;
  }
}
