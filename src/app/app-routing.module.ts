import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestorsComponent } from './gestors/gestors.component';
import { HomePresentationComponent } from './home-presentation/home-presentation.component';

const routes: Routes = [
  { path: 'gestors', component: GestorsComponent },
  { path: 'motivation', component: HomePresentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }