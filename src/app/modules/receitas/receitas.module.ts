import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './pages/receitas/receitas.component';

@NgModule({
  declarations: [
    ReceitasComponent
  ],
  imports: [CommonModule, ReceitasRoutingModule],
})
export class ReceitasModule {}
