import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class ProductoService {
  apiRoot: string = "http://httpbin.org"; 

  constructor(private http: Http) { }  

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

}
