import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../prisma.service";
import { hash } from "argon2";

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        const { email, nickname, password } = createUserDto;
        const existingEmail = await this.prismaService.user.findFirst({
            where: { email },
        });

        const existingNickname = await this.prismaService.user.findFirst({
            where: { nickname },
        });

        if (existingNickname) {
            throw new BadRequestException('Nickname already exists');
        }

        if (existingEmail) {
            throw new BadRequestException('Email already exists');
        }

        const user = { email, password: await hash(password) };

        return this.prismaService.user.create({ data: user });
    }

    findAll() {
        return this.prismaService.user.findMany({ include: { profile: true } });
    }

    findOne(id: string) {
        return this.prismaService.user.findUnique({ where: { id }, include: { profile: true } });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const { email, nickname, password } = updateUserDto;
        const existingEmail = await this.prismaService.user.findFirst({
            where: { email },
        });

        const existingNickname = await this.prismaService.user.findFirst({
            where: { nickname },
        });

        if (existingNickname) {
            throw new BadRequestException('Nickname already exists');
        }

        if (existingEmail) {
            throw new BadRequestException('Email already exists');
        }

        const updatedUser = { ...updateUserDto, password: await hash(password) };

        return  this.prismaService.user.update({ where: { id }, data: updatedUser, include: { profile: true } });
    }

    remove(id: string) {
        return this.prismaService.user.delete({ where: { id }, include: { profile: true } });
    }
}
