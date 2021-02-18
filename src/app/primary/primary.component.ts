import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';

import { MailService } from '../mail.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css'],
})
export class PrimaryComponent implements OnInit {
  constructor(
    private __mailService: MailService,
    private __tabMenu: MenuService
  ) {}
  public mails: Mail[] = [];
  ngOnInit(): void {
    this.getMail();
    console.log(this.getMail(), '  ');
  }

  getMail() {
    this.__mailService.getData().subscribe((data) => {
      return (this.mails = data);
    });
    this.__tabMenu.isMessageTab(true);
  }
}
