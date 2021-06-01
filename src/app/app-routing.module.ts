import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
      path: 'layout', component: LayoutComponent,
      children: [
        { path: 'dashboard', component: MainComponent },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'testimonials', component: TestimonialsComponent },
      ]
    },
    {
      path: 'layout',
      loadChildren: () => import('./components/layout/layout.module').then(mod => mod.LayoutModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
 exports: [RouterModule]
})


export class AppRoutingModule { }
