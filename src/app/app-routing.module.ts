import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'item', loadChildren: './page/item/item.module#ItemPageModule' },
  { path: 'edit', loadChildren: './page/edit/edit.module#EditPageModule' },
  { path: 'delete', loadChildren: './page/delete/delete.module#DeletePageModule' },
  { path: 'add', loadChildren: './page/add/add.module#AddPageModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './page/register/register.module#RegisterPageModule' },
  { path: 'num', loadChildren: './page/num/num.module#NumPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
