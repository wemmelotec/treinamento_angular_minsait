import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

  // Contrutor que vai injetar o nosso observable nesse componente
  constructor(public readonly layoutService: LayoutService) {}
}
