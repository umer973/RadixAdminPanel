import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userform: FormGroup;
  user: User;
  constructor(private formBuilder: FormBuilder, private service: UserService,
    private router: Router,
    private notificationservice:NotificationService,
    private spinnerService:SpinnerService) { }

  ngOnInit(): void {
    this.createFormControls();
  }


  createFormControls() {

    this.userform = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
      UserType: ['']
    });
  }

  get f() { return this.userform.controls }

  onSubmit() {

    if (this.userform.valid) {

      this.user = this.userform.getRawValue();
    
      this.spinnerService.show();
      this.service.PostLogin(this.user).subscribe(res => {
        console.log(res);
        let result: any = res;
        this.spinnerService.hide();
        if (result.StatusCode == 200) {
                  
          if(result.Result!=undefined || result.Result!=null){
            this.router.navigate(['/layout']);
          }
          else{
           
            this.notificationservice.showInfo('Invalid login','Radix');
          }
        }

      }
      , err => {

        this.notificationservice.showError('Internal server error','Radix');
       

      });
     

      this.userform.reset();

    }

  }

}
