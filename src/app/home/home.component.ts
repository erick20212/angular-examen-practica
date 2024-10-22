import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton, SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent,CardModule,ToolbarModule,ButtonModule,SplitButtonModule,InputTextModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }

}