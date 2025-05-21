import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Entregador } from '../models/Entregador';

@Injectable({
  providedIn: 'root'
})
export class EntregadorService {

  constructor() { }

  httpClient = inject(HttpClient);

  createEntregador(entregador: Entregador) {
    return this.httpClient.post<boolean>("http://localhost:8080/Entregador/save", entregador);
  }

  getEntregadorByUserName(username: string) {
    return this.httpClient.get<Entregador>(`http://localhost:8080/Entregador/getEntregadorByUsername?username=${username}`);
  }

  getEntregadorByUserNameAndSenha(username: string, senha: string) {
    return this.httpClient.get<Entregador>(`http://localhost:8080/Entregador/getEntregadorByUsernameAndSenha?username=${username}&senha=${senha}`);
  }

  getAllEntregadores() {
    return this.httpClient.get<Array<Entregador>>("http://localhost:8080/Entregador/get-all");
  }
}
