import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 2, name: 'Hamlet'},
            {id: 3, name: 'Javier'},
            {id: 4, name: 'Cam'},
            {id: 5, name: 'John'},
            {id: 6, name: 'Leslie'},
            {id: 7, name: 'Carrie'},
            {id: 8, name: 'Maria'},
            {id: 9, name: 'Joan'},
            {id: 10, name: 'Jefe'},
            {id: 11, name: 'Papi'}
          ];

          return {heroes};
    }
}