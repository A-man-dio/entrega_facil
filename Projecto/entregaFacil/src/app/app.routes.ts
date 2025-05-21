import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaEscolherCadastroComponent } from './pagina-escolher-cadastro/pagina-escolher-cadastro.component';
import { ToastAlertComponent } from './toast-alert/toast-alert.component';
import { PaginaUtilizadorComponent } from './pagina-utilizador/pagina-utilizador.component';
import { PaginaSolicitarEntregaComponent } from './pagina-solicitar-entrega/pagina-solicitar-entrega.component';

export const routes: Routes = [
    {path: "", redirectTo: "pagina-inicial", pathMatch: "full" }, // Redireciona para página inicial
    {path: "pagina-inicial" , component: PaginaInicialComponent},
    {path: "pagina-login" , component: PaginaLoginComponent},
    {path: "pagina-escolher-cadastro" , component: PaginaEscolherCadastroComponent},
    {path: "pagina-cadastro" , component: PaginaCadastroComponent},
    {path: "toast-alert" , component: ToastAlertComponent},
    {path: "pagina-utilizador",component:PaginaUtilizadorComponent},
    {path: "solicitar-entrega",component:PaginaSolicitarEntregaComponent}
];
