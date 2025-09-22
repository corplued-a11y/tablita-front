import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tercero } from '../interfaces/tercero';

@Injectable({
  providedIn: 'root',
})
export class TablitasService {
  private apiUrl = environment.SERVER_URL;

  constructor(private http: HttpClient) {}
  /* 
  getTerceros(): Observable<Tercero[]> {
    return this.http.get<Tercero[]>(`${this.apiUrl}/tasks`);
  }
  getTercerosItem(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tasks/${id}`);
  } 
  getVacaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vacacion`);
  }
  getVacacion(id:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vacacion/${id}`);
  }
  getPdfTDR(id:string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/pdf-TDR/${id}`, { responseType: 'blob' });
  } */

  getTerceros(): Observable<Tercero[]> {
    return this.http.get<Tercero[]>(`${this.apiUrl}/terceros`);
  }

  getTercerosItem(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/terceros/${id}`);
  }

  getVacaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vacaciones`);
  }

  getVacacion(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vacaciones/${id}`);
  }

  getPdfTDR(item: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/pdf/tdr/${item}`, {
      responseType: 'blob',
    });
  }

  getPdfOGRH(item: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/pdf/ogrh/${item}`, {
      responseType: 'blob',
    });
  }
}
