import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers!: HttpHeaders;


  constructor(private http: HttpClient) { this.headers = new HttpHeaders;}

  public get<T>(url: string, includeHeaders:boolean = false ):Observable<T> {
    return this.http.get<T>(url, includeHeaders ? { headers: this.headers }: {});
  }

  public put<T>(url: string,body: any, includeHeaders:boolean = false ):Observable<T> {
    return this.http.put<T>(url, body, includeHeaders ? { headers: this.headers }: {});
  }

  public patch<T>(url: string,body: any, includeHeaders:boolean = false ):Observable<T> {
    return this.http.patch<T>(url, body, includeHeaders ? { headers: this.headers }: {});
  }
  
  public delete<T>(url: string, id:string, includeHeaders:boolean=false):Observable<T>{
    return this.http.delete<T>(`${url}/${id}`,includeHeaders ? {headers:this.headers}:{});
  }
  
  public getById<T>(url:string, id:string, includeHeaders:boolean=false):Observable<T>{
    return this.http.get<T>(`${url}/${id}`, includeHeaders ? { headers : this.headers } : {});
  }

  public post<T>(url: string,body: any, includeHeaders:boolean = false ):Observable<T> {
    return this.http.post<T>(url, body, includeHeaders ? { headers: this.headers }: {});
  }
}
