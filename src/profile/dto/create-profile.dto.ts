import { IsString, IsEnum, IsOptional } from 'class-validator'
import { Gender } from '../../constants/user'

export class CreateProfileDto {
    @IsString()
    firstname: string

    @IsString()
    @IsOptional()
    lastname?: string

    @IsString()
    @IsOptional()
    surname?: string

    @IsString()
    phone: string

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender
}
