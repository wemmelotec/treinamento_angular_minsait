import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { ReceitaService } from '../../../services/receita.service';
import { RecipeResponse } from 'src/app/modules/models/recipe';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
  // Esse observable é do tipo cold
  public recipes$: Observable<RecipeResponse>;
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
      false
    );
  constructor(private readonly receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading$.next(true);
    this.recipes$ = this.receitaService.getAllProducts().pipe(
      tap((recipe) => console.log(recipe)),
      finalize(() => {
        this.loading$.next(false);
      })
    );
  }

}
