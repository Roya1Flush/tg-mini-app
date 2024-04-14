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
  <table class ="catalog">
  <div id="app">
  <div id="app1">
    <tr>
      <td>
  <app-product-list title="Азиатская кухня" subtitle="Выбирай осторожно)" [products]="products.byGroup['skill']"  />
</td>
</tr>  
</div>
  <div id="app2">
    <tr>
      <td>
  <app-product-list title="Европейская кухня" subtitle="Приготовлено с любовью!" [products]="products.byGroup['intensive']" />
</td>
</tr>  
</div>
  <div id="app3">
    <tr>
      <td>
  <app-product-list title="Десерты" subtitle="Все как ты любишь!" [products]="products.byGroup['course']" />
</td>
</tr>  
</div>
  </div>
</table>
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide(); 
    //this.telegram.MainButton.show();
  }
}
