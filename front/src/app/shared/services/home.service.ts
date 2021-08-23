import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url:string=environment.apiUrl

  constructor(private http:HttpClient) { }

  public getCharacters():Observable<Object>{
    console.log(this.url)
    return this.http.get(this.url+'/all')
  }
}
