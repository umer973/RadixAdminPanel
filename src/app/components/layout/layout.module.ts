import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { MainComponent } from '../main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PartnerComponent } from '../partner/partner.component';



@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
