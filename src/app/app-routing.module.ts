import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';

import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { ContatosComponent } from './components/contatos/contatos.component';

import { AdminComponent } from './components/admin/admin.component';
import { AdminProdutosComponent } from './components/admin/admin-produtos/admin-produtos.component';
import { AdminProdutosListComponent } from './components/admin/admin-produtos/admin-produtos-list/admin-produtos-list.component';
import { AdminProdutosDetailComponent } from './components/admin/admin-produtos/admin-produtos-detail/admin-produtos-detail.component';
import { AdminProdutosAddComponent } from './components/admin/admin-produtos/admin-produtos-add/admin-produtos-add.component';
import { AdminProdutosEditComponent } from './components/admin/admin-produtos/admin-produtos-edit/admin-produtos-edit.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'produtos', component: AdminProdutosComponent,
        children: [
          { path: 'list', component: AdminProdutosListComponent },
          { path: 'add', component: AdminProdutosAddComponent },
          { path: 'edit/:id', component: AdminProdutosEditComponent },
          { path: 'detail/:id', component: AdminProdutosDetailComponent }
        ]
      },
      { path: 'categorias', component: RegistrationComponent },
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },
  {
    path: 'user/perfil', component: PerfilComponent
  },
  { path: 'eventos', redirectTo: 'eventos/lista' },
  {
    path: 'eventos', component: EventosComponent,
    children: [
      { path: 'detalhe/:id', component: EventoDetalheComponent },
      { path: 'detalhe', component: EventoDetalheComponent },
      { path: 'lista', component: EventoListaComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'palestrantes', component: PalestrantesComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
