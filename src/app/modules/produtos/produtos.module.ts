//Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Externos
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';

//Internos
import { LoadingComponent } from '../components/loading/loading.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    //Angular
    FormsModule,
    CommonModule,

    //Externos
    CardModule,
    ButtonModule,
    RatingModule,
    DataViewModule,

    //Internos
    LoadingComponent,
    ProdutosRoutingModule,
  ],
})
export class ProdutosModule {}
