import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';

@Component({
  selector: 'app-ngx-pdf-test',
  templateUrl: './ngx-pdf-test.component.html',
  styleUrls: ['./ngx-pdf-test.component.scss'],
  host: {class: 'router-flex'}
})
export class NgxPdfTestComponent implements OnInit {
  currentUser: User;
  Link: string;

  constructor(
    private gatewayService: GatewayService,
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
  }

  ngOnInit(): void {
    this.Link = "https://ws.seidoit.pl/service/attachments/get/"+this.currentUser.token+"/0000DCD2-188E-42CB-B116-485621040A94/22.pdf"
  }

}
