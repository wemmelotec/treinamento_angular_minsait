import { LayoutService } from './../../services/layout.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  // Também vai injetar o layoutService
  constructor(public readonly layoutService: LayoutService) {}
}
