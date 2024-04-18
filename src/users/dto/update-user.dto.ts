import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import {
    IsEmail,
    IsEnum,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';
import { Role } from "../../constants/user";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ required: false, uniqueItems: true })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({ required: false, uniqueItems: true })
    @IsString()
    @IsOptional()
    nickname?: string;

    @ApiProperty({ required: false })
    @IsString()
    @MinLength(8)
    @IsOptional()
    password?: string;

    @ApiProperty({ enum: Role, example: Role.ADMIN, required: false })
    @IsEnum(Role)
    @IsOptional()
    role?: Role;
}
