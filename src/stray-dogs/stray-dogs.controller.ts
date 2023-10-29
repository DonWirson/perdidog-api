import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { StrayDogsService } from './stray-dogs.service';
import { CreateStrayDogDto } from './dto/create-stray-dog.dto';
import { UpdateStrayDogDto } from './dto/update-stray-dog.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Controller('stray-dogs')
export class StrayDogsController {
  constructor(private readonly strayDogsService: StrayDogsService) { }

  @Post()
  create(@Body() createStrayDogDto: CreateStrayDogDto) {
    return this.strayDogsService.create(createStrayDogDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto,
  ) {
    return this.strayDogsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.strayDogsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string,
    @Body() updateStrayDogDto: UpdateStrayDogDto) {
    return this.strayDogsService.update(id, updateStrayDogDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.strayDogsService.remove(id);
  }
}
