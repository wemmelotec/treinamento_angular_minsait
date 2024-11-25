//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Externos
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

//Internos
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    //Angular
    CommonModule,
    RouterModule,

    //Externos
    MenuModule,
    CardModule,
    ButtonModule,

    //Internos
    CoreRoutingModule,
  ],
})
export class CoreModule {}
