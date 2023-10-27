import { IsBoolean, IsDate, IsIn, IsOptional, IsString, IsUUID, MaxLength, MinLength, minLength } from 'class-validator';

export class CreateStrayDogDto {

    @IsUUID()
    id: number;

    @IsDate()
    reportDate: Date

    @IsString()
    address: string

    @IsString()
    @IsOptional()
    photoUrl: string

    @IsString()
    @IsOptional()
    @MinLength(10)
    @MaxLength(100)
    description: string;

    
    @IsIn(['male,female,unknow'])
    gender: string

    @IsBoolean()
    isActive: boolean
}
