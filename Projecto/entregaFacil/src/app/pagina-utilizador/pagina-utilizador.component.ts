import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';
import { EmpresaService } from '../services/empresa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-utilizador',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './pagina-utilizador.component.html',
  styleUrls: ['./pagina-utilizador.component.scss']
})
export class PaginaUtilizadorComponent implements OnInit {

  
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaService.getAllEmpresas().subscribe({
      next: (res) => {
        this.empresas = res;
      },
      error: (err) => {
        console.error('Erro ao buscar empresas:', err);
      }
    });
  }
  onCardClick(empresa: Empresa) {
  console.log('Empresa clicada:', empresa);
  
  }
}
