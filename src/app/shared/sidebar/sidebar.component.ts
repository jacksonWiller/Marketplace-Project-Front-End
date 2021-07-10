import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isShown = true;


  // tslint:disable-next-line:typedef
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
