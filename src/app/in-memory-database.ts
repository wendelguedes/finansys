import {InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDataBase implements InMemoryDbService {

    createDb() {
        const categories: Category[] = [
            {id:1, name:'Moradia',description:'Pagamento de contas da casa'},
            {id:2, name:'Saúde',description:'Hospital, remédios'},
            {id:3, name:'Lazer',description:'Cinema, parques, clubes'}
        ];
        return {categories}
    }

}