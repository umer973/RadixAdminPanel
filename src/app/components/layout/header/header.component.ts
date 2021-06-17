import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {
  menus: any;
  constructor(private route:Router, private service: CommonService,) {}

  ngOnInit(): void {
    this.getMenus();
  }

  /* LOADING MENUS */
  getMenus() {
    this.menus = [] = this.service.getMenus();
    console.log(this.menus);
  }

  /*MENU CONDITION*/
  getClass(menu) {

    if (menu == "Other Pages"){
      return "fa fa-angle-down";
    }
  }
  getdropdown(menu){

    if (menu == "Other Pages"){
      return "menu-item";
    }
  }


 /**navigation*/
  navigate_upload(){
    this.route.navigate(['dashboard/fileupload'])
  }
  navigate(sub) {
  
    switch(sub)
    {
      case "Testimonials":
        this.route.navigate(['dashboard/testimonials'])
        break;
      case "Clients":
        this.route.navigate(['dashboard/clients'])
        break;
      case "Partners":
        this.route.navigate(['dashboard/partner'])
        break;  
    }
    
  }
  navigate2() {
    this.route.navigate(['dashboard/'])
  }
  navigate3() {
    this.route.navigate(['dashboard/partner'])
  }
  
}
