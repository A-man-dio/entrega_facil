import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrega } from '../models/Entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private baseUrl = "http://localhost:8080/entregas"; // base do controller

  private http = inject(HttpClient);

  getAllEntregas(): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(this.baseUrl);
  }

  createEntrega(entrega: Entrega): Observable<Entrega> {
    return this.http.post<Entrega>(this.baseUrl, entrega);
  }

  getEntregasByIdEmpresa(idEmpresa: number): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(`${this.baseUrl}/empresa/${idEmpresa}`);
  }

  getEntregasByIdUtilizador(idUtilizador: number): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(`${this.baseUrl}/utilizador/${idUtilizador}`);
  }

  updateEntrega(id: number, entrega: Entrega): Observable<Entrega> {
    return this.http.put<Entrega>(`${this.baseUrl}/${id}`, entrega);
  }

  atualizarEstadoEEmpresa(id: number, estado: string, idEmpresa: number, preco: number): Observable<Entrega> {
    const body = {
      estado: estado,
      idEmpresa: idEmpresa.toString(),
      preco: preco.toString()
    };
    return this.http.put<Entrega>(`${this.baseUrl}/${id}/estado`, body);
  }

}
