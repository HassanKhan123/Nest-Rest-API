import { Injectable } from '@nestjs/common';

import {Item} from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items:Item[] = [
        {
            id:'1234',
            name:'Item 1',
            description:'Item 1 description',
            qty:10
        },
        {
            id:'12345',
            name:'Item 2',
            description:'Item 2 description',
            qty:10
        }
    ]

    findAll() : Item[] {
        return this.items
    }

    findOne(id:string):Item{
       return this.items.find(item => item.id === id)
    }
}
