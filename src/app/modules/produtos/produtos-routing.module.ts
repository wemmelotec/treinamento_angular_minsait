import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Route[] = [
  {
    path: '',
    component: ProdutosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
