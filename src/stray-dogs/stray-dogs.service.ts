import { HttpException, Injectable, InternalServerErrorException, NotFoundException, HttpStatus } from '@nestjs/common';
import { CreateStrayDogDto } from './dto/create-stray-dog.dto';
import { UpdateStrayDogDto } from './dto/update-stray-dog.dto';
import { ObjectId, Repository } from 'typeorm';
import { StrayDog } from './entities/stray-dog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class StrayDogsService {

  constructor(
    @InjectRepository(StrayDog)
    private readonly strayDogRepository: Repository<StrayDog>) { }

  async create(createStrayDogDto: CreateStrayDogDto) {
    try {
      const strayDog = this.strayDogRepository.create(
        createStrayDogDto
      );
      return await this.strayDogRepository.save(strayDog);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error submiting report of stray dog'
      );
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const strayDogs = await this.strayDogRepository.find({
      take: limit,
      skip: offset
    });
    if (!strayDogs)
      throw new NotFoundException;
    return { strayDogs };
  }

  async findOne(id: string) {
    try {
      return await this.strayDogRepository.findOneByOrFail({ id })
    } catch (error) {
      throw new NotFoundException()
    }
  }

  async update(id: string, updateStrayDogDto: UpdateStrayDogDto) {
    const strayDog = await this.strayDogRepository.preload(
      {
        id: id,
        ...updateStrayDogDto
      }
    );
    if (!strayDog)
      throw new HttpException('No stray dog report was updated', HttpStatus.NO_CONTENT);

    await this.strayDogRepository.save(strayDog);
    return strayDog;
  }

  async remove(id: string) {
    const deletedRecord = await this.strayDogRepository.delete({ id })
    if (deletedRecord.affected < 1)
      throw new HttpException('No stray dog report was deleted', HttpStatus.NO_CONTENT)
    return true;
  }
}
