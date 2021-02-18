import { AfterContentInit, Component, OnInit } from '@angular/core';

import { MailService } from './mail.service';
import { Mail } from './mail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '04/10/2021';

  public mailArray: Mail[] = [];

  constructor(private __mailArray: MailService) {}

  ngOnInit() {
    this.getMail();
  }

  getMail() {
    return this.__mailArray.getData().subscribe((data) => {
      this.mailArray = data;
    });
  }
}
