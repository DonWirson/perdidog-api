import { IsBoolean, IsDate, IsInt, IsString, MaxLength } from 'class-validator';

export class CreateStrayDogDto {

    @IsInt()
    id: number;

    @IsDate()
    reportDate: Date

    @IsString()
    address: string

    @IsString()
    photoUrl: string

    @IsString()
    @MaxLength(100)
    description: string;

    @IsBoolean()
    isActive: boolean
}
