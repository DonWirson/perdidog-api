import { PartialType } from '@nestjs/mapped-types';
import { CreateStrayDogDto } from './create-stray-dog.dto';

export class UpdateStrayDogDto extends PartialType(CreateStrayDogDto) {}
