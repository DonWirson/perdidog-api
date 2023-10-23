import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StrayDogsService } from './stray-dogs.service';
import { CreateStrayDogDto } from './dto/create-stray-dog.dto';
import { UpdateStrayDogDto } from './dto/update-stray-dog.dto';

@Controller('stray-dogs')
export class StrayDogsController {
  constructor(private readonly strayDogsService: StrayDogsService) {}

  @Post()
  create(@Body() createStrayDogDto: CreateStrayDogDto) {
    return this.strayDogsService.create(createStrayDogDto);
  }

  @Get()
  findAll() {
    return this.strayDogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.strayDogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStrayDogDto: UpdateStrayDogDto) {
    return this.strayDogsService.update(+id, updateStrayDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.strayDogsService.remove(+id);
  }
}
