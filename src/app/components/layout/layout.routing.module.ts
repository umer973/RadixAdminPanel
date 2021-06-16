import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from '../main/main.component';
import { PartnerComponent } from '../partner/partner.component';
import { LayoutComponent } from "./layout.component";
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children:[
      { path:'partner',component:PartnerComponent},
      { path: 'testimonials', component: TestimonialsComponent },
      { path: 'fileupload', component: FileuploadComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
