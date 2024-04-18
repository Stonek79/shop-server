import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsEnum,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';
import { Role } from "../../constants/user";

export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com', uniqueItems: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: false, uniqueItems: true })
    @IsString()
    @IsOptional()
    nickname?: string;

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty({ enum: Role, example: Role.USER })
    @IsEnum(Role)
    @IsOptional()
    role?: Role = Role.USER;
}
