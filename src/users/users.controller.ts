import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto)
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get('get/:id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @UsePipes(new ValidationPipe())
    @Patch('patch/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete('delete/:id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
