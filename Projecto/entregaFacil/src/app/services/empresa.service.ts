import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  constructor() { }

  httpClient = inject(HttpClient);

  createEmpresa(empresa: Empresa) {
    return this.httpClient.post<Empresa>("http://localhost:8080/Empresa/save", empresa);
  }

  getEmpresaByNome(nome : string) {
    return this.httpClient.get<Empresa>(`http://localhost:8080/Empresa/getEmpresaByNome?nome=${nome}`);
  }

  getEmpresaByID(id : number) {
    return this.httpClient.get<Empresa>(`http://localhost:8080/Empresa/getEmpresaByID?id=${id}`);
  }

  getAllEmpresas() {
    return this.httpClient.get<Array<Empresa>>("http://localhost:8080/Empresa/get-all");
  }

}
