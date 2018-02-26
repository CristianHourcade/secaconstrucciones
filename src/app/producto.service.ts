import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Productos } from './abm-productos/productos';
import { MessageService} from './message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()

export class ProductoService {

  constructor(private http: HttpClient,
    private messageService: MessageService
) { }  
    private Url = '../assets/store-product.php';
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    private log(message: string) {
      this.messageService.add('HeroService: ' + message);
    }

  addHero (hero: Productos): Observable<Productos> {
    return this.http.post<Productos>('toto', hero, httpOptions);
    
  }

}
