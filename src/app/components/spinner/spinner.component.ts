import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState, SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  show = false;
  private subscription: Subscription;

  constructor(private spinnerService: SpinnerService) { }
  
  ngOnInit() {
    this.subscription = this.spinnerService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
