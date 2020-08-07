import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get All items';
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Description: ${createItemDto.description}, Quantity: ${createItemDto.qty}`;
  }

  @Put()
  update(): string {
    return 'Update item';
  }

  @Delete()
  delete(): string {
    return 'Delete item';
  }
}
