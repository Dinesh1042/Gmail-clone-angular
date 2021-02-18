import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { MailService } from '../mail.service';
import { Mail } from '../mail';

@Component({
  selector: 'app-select-all',
  templateUrl: './select-all.component.html',
  styleUrls: ['./select-all.component.css'],
})
export class SelectAllComponent implements OnInit, AfterContentInit {
  @Input() isMessageTab = false;
  public mails: Mail[] = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private __mail: MailService
  ) {}

  ngOnInit(): void {}

  public id = this.route.snapshot.paramMap.get('id');

  back() {
    this.location.back();
  }

  ngAfterContentInit() {
    this.getMail();
  }

  getMail() {
    return this.__mail.getData().subscribe((data) => {
      return (this.mails = data);
    });
  }
}
