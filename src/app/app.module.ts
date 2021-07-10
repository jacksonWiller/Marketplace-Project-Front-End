import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { NgxCurrencyModule } from 'ngx-currency';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { NavComponent } from './shared/nav/nav.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TituloComponent } from './shared/titulo/titulo.component';



import { EventoService } from './services/evento.service';
import { LoteService } from './services/lote.service';

import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';

// Components
  // Admin
    // Produtos
import { AdminComponent } from './components/admin/admin.component';
import { AdminProdutosComponent } from './components/admin/admin-produtos/admin-produtos.component';
import { AdminProdutosListComponent } from './components/admin/admin-produtos/admin-produtos-list/admin-produtos-list.component';
import { AdminProdutosDetailComponent } from './components/admin/admin-produtos/admin-produtos-detail/admin-produtos-detail.component';
    // Categotias

  // E-commerce

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    PalestrantesComponent,
    ContatosComponent,
    DashboardComponent,
    PerfilComponent,
    NavComponent,
    TituloComponent,
    DateTimeFormatPipe,
    EventoDetalheComponent,
    EventoListaComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    SidebarComponent,
    // Components
      // Admin
    AdminComponent,
    AdminProdutosComponent,
    AdminProdutosListComponent,
    AdminProdutosDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule,
    NgxCurrencyModule
  ],
  providers: [
    EventoService,
    LoteService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
