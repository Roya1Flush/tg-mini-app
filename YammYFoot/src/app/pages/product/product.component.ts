/* Вторая страница приложения */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListComponent } from '../../components/product-list/product-list.component'; //последнее



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductListComponent], //последнее
  template: `
  <header>
	<!-- <div class="pos1"><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
	<div class="pos2"><h1>YammY</h1></div>
	<div class="pos2"><h1>Food</h1></div> -->
</header>
  <div class="centered">
  <h2 class="mb">{{ product.title }}</h2>
  <br />
  <img class="image2str" [src]="product.image"  [alt]="product.title" />
  <div class="scale">115%</div>
  <br><strong><ins>Время работы</ins></strong>
  <!-- <p>{{ product.text}}</p> -->
  <p>{{ product.time}}</p>
  <div class="menubutton"><a [href]="product.link" target="_blank">Посмотреть меню</a></div>
</div>
<table class ="catalog">
  <h2>Комбо:</h2>
    <tr>
      <td>
        <div id="kombo2str">
      <div class="pos3"><h3>Европейский ужин</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos3"><h3>Азиатские выходные</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos3"><h3>Трудовые будни</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
        </div>
      </td>
    </tr>  
</table>
<table class ="catalog">
  <h2>Блюда:</h2>
    <tr>
      <td>
        <div id="blud2str">
      <div class="pos4"><h3>Борщ</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Цезарь</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Карбонара</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Борщ</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Цезарь</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Карбонара</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Борщ</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Цезарь</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
      <div class="pos4"><h3>Карбонара</h3><img src="https://sun127-1.userapi.com/impg/Zp0mTVjnUEoBGVD2MurG7ysARB1WPlUcgHIS_g/almzILAYJcY.jpg?size=864x1080&quality=96&sign=a09a6471960a0c300863289de91e5b37&type=album"></div>
        </div>
      </td>
    </tr>  
</table>
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
    this.router.navigate([''])
    .then(() =>{
      location.reload();
    });
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
}
