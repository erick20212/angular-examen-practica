import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { ProductoService } from '../models/producto.service';
import { Producto } from '../models/producto';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [SidebarComponent,CardModule,TableModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  products!: Producto[];

  constructor(private productoService: ProductoService) {}

  ngOnInit(){

  }

}