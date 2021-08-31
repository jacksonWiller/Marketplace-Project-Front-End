import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseURL = 'https://localhost:5001/api/Produto';

    constructor(private http: HttpClient) { }

    // observibles
      public getAllProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseURL);
      }

      public getEventosByNome(tema: string): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.baseURL}/getByTema/${tema}`);
      }

      public getPeodutoById(id: string): Observable<Produto> {
        return this.http.get<Produto>(`${this.baseURL}/${id}`);
      }

      public postProduto(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.baseURL, produto);
      }

      public putProduto(id: string , produto: Produto): Observable<Produto> {
        return this.http.put<Produto>(`${this.baseURL}/${id}`, produto);
      }

      public deleteProduto(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/${id}`);
      }

      postUpload(id: string, file: File): Observable<Produto> {
        const fileToUpload = file[0] as File;
        const formData = new FormData();
        formData.append('file', fileToUpload);

        return this.http
          .post<Produto>(`${this.baseURL}/upload-image/${id}`, formData)
          .pipe(take(1));
      }
}
