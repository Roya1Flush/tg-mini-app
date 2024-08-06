/* Разобраться с маршрутизацией по разным разделам по type: skill; intensive; Course; */

import { Component, Input } from '@angular/core';
import { IProduct } from '../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink], /* Настройка динамической маршрутизации на ProductListComponent.component.ts */
  template: `
   <h2 class="mb">{{ title }}</h2>
   <h4 class="mb">{{ subtitle }}</h4>
   <ul class="block">
      @for (product of products; track product.id) {
        <li class="product-item" [routerLink]="'/product/' + product.id">  <!-- Переход по клику на ID -->
          <div class="product-image">
            <img [src]="product.image" [alt]="product.title" />
      </div>
      <div class="product-info">
        <h3>{{ product.title }}</h3>
        <p class="descrip">{{ product.text }}</p>
        <p class="descrip">{{ product.time }}</p>
        <p class="descrip">{{ product.distance }}</p>
        <p class="descrip">{{ product.text2 }}</p>

      </div>
      </li>
      }
    </ul>
    `,
})
export class ProductListComponent {
@Input() title: string;
@Input() subtitle: string;
@Input() products: IProduct[];
}
