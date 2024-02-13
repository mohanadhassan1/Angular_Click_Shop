import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ObsAndOperatorsComponent } from './components/obs-and-operators/obs-and-operators.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { UserReactiveComponent } from './components/user-reactive/user-reactive.component';
import { UserAuthenticationComponent } from './components/user-authentication/user-authentication.component';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
    {path:"", component:ProductsComponent, title:"Click Shop"},
    {path:"home", component:ProductsComponent, title:"Click Shop"},
    {path:"products", component:ProductsParentComponent, title:"Products"},
    {path:"product/:id", component:ProductDetailsComponent, title:"Product Details"},
    {path:"about", component:AboutComponent, title:"Abouts", canActivate:[userGuard]},
    {path:"obsandoper", component:ObsAndOperatorsComponent, title:"Observable And Operator"},
    {path:"admin/insertproduct", component:NewProductComponent, title:"New Product"},
    {path:"admin/insertproduct/:id", component:NewProductComponent, title:"Edit Product"},
    {path:"user", component:UserReactiveComponent, title:"User Reactive"},
    // {path:"auth", component:UserAuthenticationComponent, title:"User Authentication"},
    {path:"authLogin", component:UserAuthenticationComponent, title:"Login"},
    {path:"authLogout", component:UserAuthenticationComponent, title:"Logout"},
    {path:"**", component:NotFoundComponent, title:"Not Found"},
];
