import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductListComponent } from './components/product-list/product-list.component';



export const routes: Routes = [
    { path: '', component: ShopComponent, pathMatch: 'full'},
    { path: 'feedback', component: FeedbackComponent},
    { path: 'product/:id', component: ProductComponent},
    { path: 'cook', component: ProductListComponent }, //Получение всего списка блюд, поваров и комбо - нужно будет разделить
    //{ path: 'cooks/:id', component: CookDetailComponent }, поиск повара по id - пока не сделано 
];
