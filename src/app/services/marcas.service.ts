import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  obtenerListaMarcas(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseApiUrl + 'api/Marcas');
  }
}
