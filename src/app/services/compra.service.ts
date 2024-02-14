import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Compra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private myAppurl: string = environment.endpoint;
  private myApiUrl: string = 'api/Compras/';


  constructor(private http: HttpClient) { }

  getCompras(): Observable<Compra[]> {
    //return this.http.get<Compra[]>('${this.myAppurl}${this.myApiUrl}');
    const url = this.myAppurl+this.myApiUrl;
    return this.http.get<Compra[]>(url);
  }

  getCompra(id: number): Observable<Compra> {
    //return this.http.get<Compra>('${this.myAppurl}${this.myApiUrl}${id}');
    const url = this.myAppurl+this.myApiUrl+id;
    return this.http.get<Compra>(url);
  }

  deleteCompra(id: number): Observable<void>{
    const url = this.myAppurl+this.myApiUrl+id;
    return this.http.delete<void>(url);
  }

  addCompra(compra: Compra):Observable<Compra> {
    return this.http.post<Compra>('${this.myAppurl}${this.myApiUrl}', compra);

  }
  updateCompra(id: number, compra: Compra):Observable<void>{
    return this.http.put<void>('${this.myAppurl}${this.myApiUrl${id}}', compra);

  }

}
