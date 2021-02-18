import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  primaryOverview() {
    this.router.navigate(['primary'], { relativeTo: this.route });
  }
  socialOverview() {
    this.router.navigate(['social'], { relativeTo: this.route });
  }
}
