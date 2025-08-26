import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TablitasService {
  private apiUrl = environment.SERVER_URL;
  //'https://holy-publicly-herring.ngrok-free.app'; // sin puerto

  constructor(private http: HttpClient) {}

  getContratos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contratos`);
  }

  getContrato(item: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contratos/item/${item}`);
  }
  generarExcel(item: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/reporte-excel/${item}`, { responseType: 'blob' });
  }

  generarPDF(item: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/reporte-pdf/${item}`, { responseType: 'blob' });
  }
    generarReportes(item: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/generar-reportes/${item}`);
  }
}
