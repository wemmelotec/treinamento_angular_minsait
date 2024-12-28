import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../components/loading/loading.component';
//Externos
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [ReceitasComponent],
  imports: [
    CommonModule,
    FormsModule,

    //Externos
    CardModule,
    ButtonModule,
    RatingModule,
    DataViewModule,

    //Internos
    LoadingComponent,
    ReceitasRoutingModule,
    

  ],
})
export class ReceitasModule {}
