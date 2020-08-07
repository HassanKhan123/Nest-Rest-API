import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateItemDto } from './dto/create-item.dto';
import {ItemsService} from './items.service'
import {Item} from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id:string) : Item{
      return this.itemsService.findOne(id)
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
