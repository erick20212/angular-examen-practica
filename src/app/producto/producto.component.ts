import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CardModule,SidebarComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}
