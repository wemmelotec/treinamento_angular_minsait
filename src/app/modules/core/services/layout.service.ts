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
  // Hot Observable definido pelo true; e também é multicast (mesmo valor para todos os componentes observarem)
  // Emiti os valores dentro do contexto do layoutservice
  private menuToggle = new BehaviorSubject<boolean>(true);
  // Esse é pra quem vai escutar fora do contexto layoutService
  // Expondo essa variável como um observavel
  public menuToggle$ = this.menuToggle.asObservable();

  private state: LayoutState = {
    mainMenuVisible: true,
  };

  constructor() {
  // Emitindo um valor através do next, estou passando o valor true no momento em que a aplicação é montada
    this.menuToggle.next(this.state.mainMenuVisible);
  }

  // Esse vai trocar de true para false e emitir novamente para o observable
  onMenuToggle() {
    this.state.mainMenuVisible = !this.state.mainMenuVisible;
    this.menuToggle.next(this.state.mainMenuVisible);
  }
}

// Esse observable foi utilizado no sidebar.componente através de uma animação
