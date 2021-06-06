import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from './services/common.service';
import { NotificationService } from './services/notification.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit,AfterViewInit {

  data: any;

  constructor(private commonservice: CommonService, private notifyService: NotificationService,
    private spinnerService: SpinnerService) { }

  ngAfterViewInit(): void {
    //this.loadInitaildata();
  }

  ngOnInit(): void {

    
  }

  loadInitaildata() {

    this.spinnerService.show();
    this.commonservice.GetInitialData().subscribe(res => {
      let response = res;
      this.data = res;
      this.spinnerService.hide();
    }, err => {
      this.spinnerService.hide();
      this.notifyService.showError("API service is down please contact administrator..", "Radix");
    })

  }



}
