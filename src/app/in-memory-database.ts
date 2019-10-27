import {InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from "./pages/entries/shared/entry.model";


export class InMemoryDataBase implements InMemoryDbService {

    createDb() {
        const categories: Category[] = [
            {id:1, name:'Moradia',description:'Pagamento de contas da casa'},
            {id:2, name:'Saúde',description:'Hospital, remédios'},
            {id:3, name:'Lazer',description:'Cinema, parques, clubes'},
            {id:4, name:'Salário',description:'Salário CTL'}
        ];
  
        const entries: Entry[] = [
            {id:1, name:'Gáz de cozinha',categoryId: categories[0].id, category: categories[0], paid:true, date: '14/10/2018', amount: '70,80', type: 'expense', description: 'Despesas' } as Entry, 
            {id:2, name:'Hospital santa Helena',categoryId: categories[1].id, category: categories[1], paid:true, date: '14/10/2018', amount: '20,80', type: 'expense', description: 'Despesas' } as Entry,
            {id:3, name:'Clube do zero',categoryId: categories[2].id, category: categories[2], paid:false, date: '14/10/2018', amount: '220,80', type: 'expense', description: 'Despesas' } as Entry,
            {id:4, name:'Salário',categoryId: categories[3].id, category: categories[3], paid:true, date: '05/10/2018', amount: '5800,80', type: 'revenue', description: 'Receitas' } as Entry
        ];
        return {categories, entries}
    }

}