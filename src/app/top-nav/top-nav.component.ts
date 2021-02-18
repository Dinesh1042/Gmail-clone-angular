import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  constructor(private __menuBar: MenuService) {}
  public isMenu = true;
  ngOnInit(): void {}

  toggleMenu() {
    this.isMenu = !this.isMenu;
    return this.__menuBar.getMenu(this.isMenu);
  }
}
