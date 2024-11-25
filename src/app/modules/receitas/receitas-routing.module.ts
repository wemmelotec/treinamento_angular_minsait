import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ReceitasComponent } from './pages/receitas/receitas.component';

const routes: Route[] = [
  {
    path: '',
    component: ReceitasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitasRoutingModule {}
