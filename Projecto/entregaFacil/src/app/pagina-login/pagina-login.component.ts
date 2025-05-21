import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilizadorService } from '../services/utilizador.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminEmpresaService } from '../services/admin-empresa.service';
import { EntregadorService } from '../services/entregador.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.scss'
})
export class PaginaLoginComponent {

  utilizadorServices = inject(UtilizadorService);
  adminEmpresaServices = inject(AdminEmpresaService);
  entregadorServices = inject(EntregadorService);
  toast = inject(ToastrService);
  router = inject(Router); // ✅ injeta o Router

  username: string = "";
  password: string = "";

  limparCampos() {
    this.username = "";
    this.password = "";
  }

  fazerLogin() {

    if (this.username == "") {
      this.toast.error('Campo vazio, por favor digite o username', 'Erro!', { closeButton: true });
      return;
    } else if (this.password == "") {
      this.toast.error('Campo vazio, por favor digite a password', 'Erro!', { closeButton: true });
      return;
    }

    this.utilizadorServices.getUtilizadorByUserNameAndSenha(this.username, this.password).subscribe({
      next: (res) => {
        this.toast.success('Usuário encontrado', 'Sucesso!', { closeButton: true });
        this.limparCampos();
        this.router.navigate(['/pagina-utilizador']); // ✅ navega após login com sucesso
      },
      error: (err) => {
        if (err.status === 404) {
          this.verificarAdminEmpresas();
        } else {
          this.toast.error('Erro de rede ao verificar usuário normal para login', 'Erro!', { closeButton: true });
          console.error('Erro:', err);
        }
      },
      complete: () => {
        console.log('Requisição finalizada com sucesso!');
      }
    });

  }

  verificarAdminEmpresas() {
    this.adminEmpresaServices.getAdminEmpresaByUserNameAndSenha(this.username, this.password).subscribe({
      next: (res) => {
        this.toast.success('Usuário encontrado - admin empresa', 'Sucesso!', { closeButton: true });
        this.limparCampos();
        this.router.navigate(['/pagina-utilizador']); // ✅ aqui também
      },
      error: (err) => {
        if (err.status === 404) {
          this.verificarEntregadores();
        } else {
          this.toast.error('Erro de rede ao verificar usuário admin empresa para login', 'Erro!', { closeButton: true });
          console.error('Erro:', err);
        }
      },
      complete: () => {
        console.log('Requisição finalizada com sucesso!');
      }
    });
  }

  verificarEntregadores() {
    this.entregadorServices.getEntregadorByUserNameAndSenha(this.username, this.password).subscribe({
      next: (res) => {
        this.toast.success('Usuário encontrado - entregador', 'Sucesso!', { closeButton: true });
        this.limparCampos();
        this.router.navigate(['/pagina-utilizador']); // ✅ também aqui se for entregador
      },
      error: (err) => {
        if (err.status === 404) {
          this.toast.error('Usuário ou senha incorrectos', 'Erro!', { closeButton: true });
        } else {
          this.toast.error('Erro de rede ao verificar usuário entregador para login', 'Erro!', { closeButton: true });
          console.error('Erro:', err);
        }
      },
      complete: () => {
        console.log('Requisição finalizada com sucesso!');
      }
    });
  }
}
