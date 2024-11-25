import { LayoutService } from './../../services/layout.service';
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('100ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
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
  constructor(public readonly layoutService: LayoutService) {}
}
