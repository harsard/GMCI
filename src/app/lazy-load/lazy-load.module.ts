import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
    { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
    { path: 'register', loadChildren: '../register/register.module#RegisterModule' },
    { path: 'login', loadChildren: '../pages/login/login.module#LoginModule' },
    // { path: 'customer', loadChildren: '../customer/customer.module#CustomerModule' },
    // { path: 'customer2', loadChildren: '../customer2/customer2.module#Customer2Module' },
    { path: '**', redirectTo: 'auth/dashboard' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
