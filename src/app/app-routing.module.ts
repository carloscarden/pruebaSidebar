import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponentComponent } from './prueba-component/prueba-component.component';

const routes: Routes = [
  { path: 'first-component', component: PruebaComponentComponent},
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
