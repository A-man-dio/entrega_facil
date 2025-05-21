import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AdminEmpresa } from '../models/AdminEmpresa';

@Injectable({
  providedIn: 'root'
})
export class AdminEmpresaService {

  constructor() { }

  httpClient = inject(HttpClient);

  createAdminEmpresa(adminEmpresa: AdminEmpresa) {
    return this.httpClient.post<boolean>("http://localhost:8080/AdminEmpresa/save", adminEmpresa);
  }

  getAdminEmpresaByUserName(username: string) {
    return this.httpClient.get<AdminEmpresa>(`http://localhost:8080/AdminEmpresa/getAdminEmpresaByUsername?username=${username}`);
  }

  getAdminEmpresaByUserNameAndSenha(username: string, senha: string) {
    return this.httpClient.get<AdminEmpresa>(`http://localhost:8080/AdminEmpresa/getAdminEmpresaByUsernameAndSenha?username=${username}&senha=${senha}`);
  }

  getAllAdminEmpresas() {
    return this.httpClient.get<Array<AdminEmpresa>>("http://localhost:8080/AdminEmpresa/get-all");
  }

}
