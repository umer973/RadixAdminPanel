import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html'
})
export class PartnerComponent implements OnInit {

  fileToUpload: File = null;
  constructor(private service: CommonService) {
  }

  ngOnInit(): void {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  upload() {
    this.service.postFile(this.fileToUpload).subscribe(res => {
      console.log(res);
    })
  }

}
