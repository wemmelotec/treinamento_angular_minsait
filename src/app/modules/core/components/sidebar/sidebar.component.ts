import { LayoutService } from './../../services/layout.service';
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // Aqui eu vou implementar a animação neste componente utilizando o Observable que foi injetado no
  // construtor através do layoutService
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }), // estado inicial, na tela
        animate('100ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [ // vá pra fora da tela
        animate('100ms', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  public items: Array<MenuItem> = [
    {
      label: 'Shopping',
      items: [
        {
          label: 'Produtos',
          icon: 'pi pi-barcode',
          routerLink: '/',
        },
      ],
    },
    {
      label: 'Culinária',
      items: [
        {
          label: 'Receitas',
          icon: 'pi pi-apple',
          routerLink: '/receitas',
        },
      ],
    },
  ];
  constructor(public readonly layoutService: LayoutService) {} // Aqui fez a injeção do layoutService no construtor
}

// Para apresentar essa animação no html vai utilizar o slide no sidebar.component.html