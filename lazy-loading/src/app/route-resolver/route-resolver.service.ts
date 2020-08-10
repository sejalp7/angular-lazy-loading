import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService implements Resolve<any>{
  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const newsUrl = 'https://httpbin.org/post';
    const news = 'The sky is blue'; // Mock data to be returned by test API

    return this.http.post(newsUrl, news).pipe(
      map( (dataFromApi) => dataFromApi['data'] ),
      catchError( (err) => Observable.throw(err.json().error) )
    );
  }
}
