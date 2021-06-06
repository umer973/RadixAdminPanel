import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MessageType } from 'src/app/enums/messagetype.enum';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, AfterViewInit {

  result: any;

  constructor(private commonservice: CommonService, private notifyService: NotificationService,
    private spinnerService: SpinnerService) { }

  ngAfterViewInit(): void {
    //this.loadInitaildata();
  }

  ngOnInit(): void {
    this.loadInitaildata();

  }

  loadInitaildata() {

    this.spinnerService.show();
    this.commonservice.GetInitialData().subscribe(res => {
      let response = res;
      this.result = response.Result;
      console.log(this.result);
      this.spinnerService.hide();
    }, err => {
      this.spinnerService.hide();
      this.notifyService.showError(MessageType.ServerError, "Radix");
    })

  }

}
