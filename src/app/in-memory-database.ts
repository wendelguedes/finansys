import {InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataBase implements InMemoryDbService {

    createDb() {
        const categories = [
            {id:1, name:'Lazer',description:'Cinema, parques, clubes'},
            {id:2, name:'Lazer',description:'Cinema, parques, clubes'},
            {id:3, name:'Lazer',description:'Cinema, parques, clubes'}
        ];
        return {categories}
    }

}