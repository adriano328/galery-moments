import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'about', component: AboutComponent},
   {path: 'moments/new', component: NewMomentComponent},
   {path: 'moment/:id', component: MomentComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
