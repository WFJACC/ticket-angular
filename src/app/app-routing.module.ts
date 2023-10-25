import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registrati bon",
    component: RegistrationComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  },
  {
    path: "ticket",
    component: TicketComponent
  },
  {
    path: "admin-list",
    component: AdminListComponent
  }
  // {
  //   path: '**',
  //   redirectTo: "formulario",
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
