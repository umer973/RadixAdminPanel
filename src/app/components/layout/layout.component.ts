import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngAfterContentInit(): void {
   
  }
  
  ngOnInit(): void {
  }

}
