import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Partners } from 'src/app/models/partners.model';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SpinnerService } from 'src/app/services/spinner.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MessageType } from 'src/app/enums/messagetype.enum';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
})
export class PartnerComponent implements OnInit {

  fileToUpload: File = null;
  partnerForm: FormGroup;
  isSubmitted: false;
  partners: Partners;
  message: any;
  result: any;
  constructor(private formBuilder: FormBuilder, private service: CommonService,
    private spinnerservice: SpinnerService, private notificationservice: NotificationService) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.loadInitaildata();
  }


 /*on load*/
 loadInitaildata() {

  this.spinnerservice.show();
  this.service.GetPartners().subscribe(res => {
    let response = res;
    this.result = response;
    console.log(this.result);
    this.spinnerservice.hide();
  }, err => {
    this.spinnerservice.hide();
    this.notificationservice.showError(MessageType.ServerError, "Radix");
  })

}
/**on insert*/
  /*popup*/
  open_popup() {
    document.getElementById("form_popup").style.display = "block";
  }
  close_popup() {
    document.getElementById("form_popup").style.display = "none";
  }

  createFormControls() {
    this.partnerForm = this.formBuilder.group({
      PartnerId: [0],
      PartnerName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      ContactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("[0-9]*$")]],
      Address: ['', Validators.required],
    });
  }
  get f() { return this.partnerForm.controls }

  /*on submit*/
  onSubmit() {

    if (this.partnerForm.valid) {

      this.partners = this.partnerForm.getRawValue();
      this.partners.PartnerId=0;
      console.warn(this.partners);
      this.spinnerservice.show();

      this.service.insertPartners(this.partners).subscribe(res => {
        console.log(res);
        let result: any = res;
        if (result.StatusCode == 200) {

          if (result.Result != undefined || result.Result != null) {
            this.partnerForm.reset();
            this.notificationservice.showSuccess(MessageType.Save, "Radix");
          }
          else {
          }
        }
        this.spinnerservice.hide();
      }, err => {
        this.spinnerservice.hide();
        this.notificationservice.showError(MessageType.ServerError, "Radix");
      });
      this.partnerForm.reset();
    }

  }
}
