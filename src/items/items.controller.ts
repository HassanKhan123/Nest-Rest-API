import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get All items';
  }

  @Get(':id')
  findOne(@Param('id') id:number) : string{
      return `Item ${id}`
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Description: ${createItemDto.description}, Quantity: ${createItemDto.qty}`;
  }

  @Put(':id')
  update(@Body() updateItemDto:CreateItemDto, @Param('id') id:number): string {
    return `Update item ${id} - Name: ${updateItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id:number): string {
    return `Delete item ${id}`;
  }
}
