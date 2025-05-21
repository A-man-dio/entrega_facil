import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UtilizadorService } from '../services/utilizador.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Utilizador } from '../models/Utilizador';
import { NgToastComponent, NgToastModule, NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { EmpresaService } from '../services/empresa.service';
import { Empresa } from '../models/empresa';
import { AdminEmpresa } from '../models/AdminEmpresa';
import { AdminEmpresaService } from '../services/admin-empresa.service';

@Component({
  selector: 'app-pagina-cadastro',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './pagina-cadastro.component.html',
  styleUrl: './pagina-cadastro.component.scss'
})

export class PaginaCadastroComponent {

  utilizadorServices = inject(UtilizadorService);
  empresaServices = inject(EmpresaService);
  adminEmpresaServices = inject(AdminEmpresaService);
  toast = inject(ToastrService); // Aqui você usa `inject` diretamente
  tipoCadastro: string | null = null;



  nomeCompleto: string = "";
  email: string = "";
  numeroTelefone: number | null = null;
  username: string = "";
  password: string = "";
  confirmacaoPassword: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipoCadastro = params['tipo'];
    });
  }


  efectuarCadastro() {

    if (this.nomeCompleto == "") {
      this.toast.error('Campo vazio , porfavor digite o nome', 'Erro!', { closeButton: true });
      return;
    } else if (this.email == "") {
      this.toast.error('Campo vazio , porfavor digite o email', 'Erro!', { closeButton: true });
      return;
    } else if (this.numeroTelefone == null) {
      this.toast.error('Campo vazio , porfavor digite o telefone', 'Erro!', { closeButton: true });
      return;
    } else if (this.username == "") {
      this.toast.error('Campo vazio , porfavor digite o username', 'Erro!', { closeButton: true });
      return;
    } else if (this.password == "") {
      this.toast.error('Campo vazio , porfavor digite a password', 'Erro!', { closeButton: true });
      return;
    } else if (this.confirmacaoPassword == "") {
      this.toast.error('Campo vazio , porfavor digite a confirmação password', 'Erro!', { closeButton: true });
      return;
    } else if (this.password != this.confirmacaoPassword) {
      this.toast.error('Senha confirmada incorrecta', 'Erro!', { closeButton: true });
      return;
    }

    if (this.tipoCadastro == "individuo") {
      
      this.utilizadorServices.getUtilizadorByUserName(this.username).subscribe({
        next: (res) => {
          this.toast.error('Já existe um utilizador com esse username', 'Erro!', { closeButton: true });
        },
        error: (err) => {
          if (err.status === 404) {
            // Usuário ainda não existe (tudo certo para cadastrar)
            this.cadastrarUsuario();
          } else {
            this.toast.error('Erro de rede ao verificar usuário a cadastrar', 'Erro!', { closeButton: true });
            console.error('Erro:', err);
          }
        },
        complete: () => {
          console.log('Requisição finalizada com sucesso!');
        }
      });

    } else {

      const empresa = new Empresa(0, this.nomeCompleto, this.numeroTelefone, this.email);

      this.empresaServices.createEmpresa(empresa).subscribe({
        next: (res) => {
          this.toast.success('Empresa cadastrada com sucesso', 'Sucesso!', { closeButton: true });

          this.cadastrarAdminEmpresa(res);

        },
        error: (err) => {
          this.toast.error('Erro de rede no cadastro da empresa', 'Erro!', { closeButton: true });
          console.error('Erro:', err);
        },
        complete: () => {
          console.log('Requisição finalizada com sucesso!');
        }
      });
    }
  }


  cadastrarUsuario() {

    const utilizador = new Utilizador(0, this.nomeCompleto, this.username, this.password, this.numeroTelefone!, this.email);

    this.utilizadorServices.createUtilizador(utilizador).subscribe({
      next: (res) => {
        this.toast.success('Usuário cadastrado com sucesso', 'Sucesso!', { closeButton: true });

        this.nomeCompleto = "";
        this.email = "";
        this.numeroTelefone = null;
        this.username = "";
        this.password = "";
        this.confirmacaoPassword = "";

      },
      error: (err) => {
        this.toast.error('Erro de rede no cadastro do usuário', 'Erro!', { closeButton: true });
        console.error('Erro:', err);
      },
      complete: () => {
        console.log('Requisição finalizada com sucesso!');
      }
    });
  }


  cadastrarAdminEmpresa(empresa: Empresa) {

    const adminEmpresa = new AdminEmpresa(0, "admin", this.username, this.password, 0, "0", empresa);

    this.adminEmpresaServices.createAdminEmpresa(adminEmpresa).subscribe({
      next: (res) => {
        console.log("admin empresa cadastrado com sucesso");

        this.nomeCompleto = "";
        this.email = "";
        this.numeroTelefone = null;
        this.username = "";
        this.password = "";
        this.confirmacaoPassword = "";

      },
      error: (err) => {
        this.toast.error('Erro de rede no cadastro do admin da empresa', 'Erro!', { closeButton: true });
        console.error('Erro:', err);
      },
      complete: () => {
        console.log('Requisição finalizada com sucesso!');
      }
    });
  }
}



