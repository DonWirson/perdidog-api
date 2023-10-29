import { IsBoolean, IsDateString, IsEnum, IsIn, IsOptional, IsString, IsUUID, MaxLength, MinLength, minLength } from 'class-validator';
import { genderEnum } from 'src/core/enums/straydog.enum';

export class CreateStrayDogDto {

    @IsDateString()
    reportDate: Date

    @IsString()
    address: string

    @IsString()
    @IsOptional()
    photoUrl?: string

    @IsString()
    @IsOptional()
    @MinLength(10)
    @MaxLength(100)
    description?: string;


    @IsEnum(genderEnum)
    @IsOptional()
    gender?: string

    @IsBoolean()
    @IsOptional()
    isActive?: boolean
}
