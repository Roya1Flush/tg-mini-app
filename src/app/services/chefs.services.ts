import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cook } from '../models/Cook'; // Пример модели

@Injectable({
  providedIn: 'root'
})
export class CookService {
  private apiUrl = 'http://localhost:8080/api/v1'; // URL вашего бэкенда

  constructor(private http: HttpClient) {}

  getCooks(): Observable<Cook[]> {
    return this.http.get<Cook[]>(this.apiUrl);
  }

  getCook(id: number): Observable<Cook> {
    return this.http.get<Cook>(`${this.apiUrl}/${id}`);
  }

  createCook(cook: Cook): Observable<Cook> {
    return this.http.post<Cook>(this.apiUrl, cook);
  }

  updateCook(id: number, cook: Cook): Observable<Cook> {
    return this.http.put<Cook>(`${this.apiUrl}/${id}`, cook);
  }

  deleteCook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}