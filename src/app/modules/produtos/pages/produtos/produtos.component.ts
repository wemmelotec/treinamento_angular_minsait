import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { ProductResponse } from 'src/app/modules/models/product';
import { ProductsService } from '../../../services/products.service';

@Component({
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public products$: Observable<ProductResponse>;
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading$.next(true);
    this.products$ = this.productsService.getAllProducts().pipe(
      tap((product) => console.log(product)),
      finalize(() => {
        this.loading$.next(false);
      })
    );
  }
}
