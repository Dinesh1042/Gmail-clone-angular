import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  public isMenu = new BehaviorSubject(true);
  public ismenuOpened = this.isMenu.asObservable();

  public isTab = new BehaviorSubject(true);
  public isTabOpened = this.isMenu.asObservable();

  getMenu(menu: any) {
    this.isMenu.next(menu);
  }

  isMessageTab(tab: any) {
    return this.isTab.next(tab);
  }
}
