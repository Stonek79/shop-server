import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    Query,
} from '@nestjs/common'
import { ProfileService } from './profile.service'
import { CreateProfileDto } from './dto/create-profile.dto'
import { UpdateProfileDto } from './dto/update-profile.dto'

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @UsePipes(new ValidationPipe())
    @Post('create')
    create(
        @Body() createProfileDto: CreateProfileDto,
        @Query('userId') userId: string,
    ) {
        return this.profileService.create(createProfileDto, userId)
    }

    @Get()
    findAll(@Param('userId') userId: string) {
        return this.profileService.findAll(userId)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.profileService.findOne(+id)
    }

    @UsePipes(new ValidationPipe())
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateProfileDto: UpdateProfileDto,
    ) {
        return this.profileService.update(id, updateProfileDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.profileService.remove(+id)
    }
}
