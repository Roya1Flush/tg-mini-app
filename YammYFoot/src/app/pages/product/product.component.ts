/* Вторая страница приложения */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
  <header>
	<div class="pos1"><img src="images/sushi.jpg"></div>
	<div class="pos2"><h1>Вставить</h1></div>
	<div class="pos3"><h1>заголовок</h1></div>
</header>
  <div class="centered">
  <h2 class="mb">{{ product.title }}</h2>
  <br />
  <img class="mb3" [src]="product.image"  [alt]="product.title" />
  <p>{{ product.text}}</p>
  <p>{{ product.time}}</p>
  <a [href]="product.link" target="_blank">Посмотреть меню</a>
</div>
  `,
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute, 
    private router: Router
    ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(id);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
}
