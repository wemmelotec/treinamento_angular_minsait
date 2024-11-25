//Angular
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

interface LayoutState {
  mainMenuVisible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private menuToggle = new BehaviorSubject<boolean>(true);
  public menuToggle$ = this.menuToggle.asObservable();

  private state: LayoutState = {
    mainMenuVisible: true,
  };

  constructor() {
    this.menuToggle.next(this.state.mainMenuVisible);
  }

  onMenuToggle() {
    this.state.mainMenuVisible = !this.state.mainMenuVisible;
    this.menuToggle.next(this.state.mainMenuVisible);
  }
}
