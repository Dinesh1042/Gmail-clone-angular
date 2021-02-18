import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  OnInit,
} from '@angular/core';
import { MenuService } from '../menu.service';

import { MailService } from '../mail.service';
import { Mail } from '../mail';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, AfterContentChecked {
  public isExpanded = false;
  public isMenu: any = false;
  public mails: Mail[] = [];
  getUnreadMail: any;

  constructor(
    private __isMenu: MenuService,
    private __mailService: MailService
  ) {}

  ngOnInit(): void {
    this.getMenu();
    this.getMail();
  }

  ngAfterContentChecked() {
    this.getUnreadMail = this.mails.filter((item: any) => {
      if (!item.isRead) {
        return item;
      }
    });
  }

  expand() {
    this.isExpanded = !this.isExpanded;
  }
  getMenu() {
    this.__isMenu.isMenu.subscribe((data) => {
      return (this.isMenu = data);
    });
  }

  getMail() {
    this.__mailService.getData().subscribe((datas) => {
      console.log(datas);
      return (this.mails = datas);
    });
  }
}
