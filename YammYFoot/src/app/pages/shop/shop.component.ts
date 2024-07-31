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
  <!-- <header>
	<div class="pos1"><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
	<div class="pos2"><h1>YammY</h1></div>
	<div class="pos2"><h1>Food</h1></div>
</header> -->
  <table class ="catalog">
  <div id="app">
    <h3> Повара </h3> 
      <br>
    <h5>  Доставят: Завтра </h5>
  <div id="app1">
    <tr>
      <td>
  <app-product-list [products]="products.byGroup['skill']"  /> 
  <!-- <app-product-list title="Повара" subtitle="Доставят: Завтра" [products]="products.byGroup['skill']"  /> -->
</td>
</tr>  
</div>
   <h3>Комбо Сортировка:</h3>
      <br>
   <h5> Ближайшая доставка</h5>
  <div id="app2">
    <tr>
      <td>
  <app-product-list [products]="products.byGroup['intensive']" />
</td>
</tr>  
</div>
<h3>Блюда</h3>
  <br>
<h5>Поиск блюд</h5>
  <div id="app3">
    <tr>
      <td>
  <app-product-list [products]="products.byGroup['course']" />
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
