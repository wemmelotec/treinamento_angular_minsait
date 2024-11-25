import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/modules/produtos/produtos.module').then(
        (m) => m.ProdutosModule
      ),
  },
  {
    path: 'receitas',
    loadChildren: () =>
      import('src/app/modules/receitas/receitas.module').then(
        (m) => m.ReceitasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
