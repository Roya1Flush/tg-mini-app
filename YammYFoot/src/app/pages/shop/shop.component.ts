//Оформление главной страницы приложения, связка с "product-list.components.ts"
import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
  <header>
	<div class="pos1"><img src="ссылка"></div>
	<div class="pos2"><h1>Вставка</h1></div>
	<div class="pos3"><h1>Заголовка</h1></div>
</header>
  <table class ="catalog">
  <div id="app">
  <div id="app1">
    <tr>
      <td>
  <app-product-list title="Повара+" subtitle="Доставят: Завтра" [products]="products.byGroup['skill']"  />
</td>
</tr>  
</div>
  <div id="app2">
    <tr>
      <td>
  <app-product-list title="Комбо" subtitle="Сортировка: Ближайшая доставка" [products]="products.byGroup['intensive']" />
</td>
</tr>  
</div>
  <div id="app3">
    <tr>
      <td>
  <app-product-list title="Блюда" subtitle="Поиск блюд" [products]="products.byGroup['course']" />
</td>
</tr>  
</div>
  </div>
</table>
  `
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide(); 
    //this.telegram.MainButton.show();
  }
}
