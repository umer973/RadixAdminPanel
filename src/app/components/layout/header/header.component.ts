import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor(private route:Router) {

  }

  navigate() {

    this.route.navigate(['dashboard/partner'])
  }

}
