import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MailService } from '../mail.service';
import { Mail } from '../mail';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit, AfterContentChecked {
  private mails: Mail[] = [];

  public mail: any = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private __mails: MailService
  ) {}

  ngOnInit(): void {
    this.getMessage();
    this.getMail();
  }
  ngAfterContentChecked() {
    this.getMessage();
  }

  getMessage() {
    const id: any = this.route.snapshot.paramMap.get('id');

    this.mails.find((ml: any) => {
      console.log(ml);
      if (ml.id == id) {
        return (this.mail = ml);
      }
    });
    console.log(this.mail.name);
  }

  getMail() {
    this.__mails.getData().subscribe((data) => {
      return (this.mails = data);
    });
  }
}
