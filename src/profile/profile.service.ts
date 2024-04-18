import { Injectable } from '@nestjs/common'
import { CreateProfileDto } from './dto/create-profile.dto'
import { UpdateProfileDto } from './dto/update-profile.dto'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ProfileService {
    constructor(private prismaService: PrismaService) {}

    async create(createProfileDto: CreateProfileDto, userId: string) {
        return this.prismaService.profile.create({
            data: { ...createProfileDto, user: { connect: { id: userId } } },
        })
    }

    findAll(userId: string) {
        return this.prismaService.profile.findMany({ where: { userId } })
    }

    findOne(id: number) {
        return `This action returns a #${id} profile`
    }

    update(id: string, updateProfileDto: UpdateProfileDto) {
        return this.prismaService.profile.update({
            where: { id },
            data: updateProfileDto,
        })
    }

    remove(id: number) {
        return `This action removes a #${id} profile`
    }
}
