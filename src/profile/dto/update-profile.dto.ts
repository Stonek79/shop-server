import { IsString, IsEnum, IsOptional } from 'class-validator'
import { Gender } from '../../constants/user'

export class UpdateProfileDto {
    @IsString()
    @IsOptional()
    firstname?: string

    @IsString()
    @IsOptional()
    lastname?: string

    @IsString()
    @IsOptional()
    surname?: string

    @IsString()
    @IsOptional()
    phone?: string

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender
}
