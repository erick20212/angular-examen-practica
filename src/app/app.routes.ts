import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'home'
    },
    {
        path:'producto',
        component:ProductoComponent,
        title:'producto'
    },
    {
        path:'cliente',
        component:ClienteComponent,
        title:'cliente'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
