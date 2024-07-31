import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';


export const routes: Routes = [
    { path: '', component: ShopComponent, pathMatch: 'full'},
    { path: 'feedback', component: FeedbackComponent},
    { path: 'product/:id', component: ProductComponent},
];
