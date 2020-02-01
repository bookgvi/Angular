import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TablesFormsGraphs';
  public items: MenuItem[] = [
    { label: 'Tables', routerLink: 'tables' },
    { label: 'Forms', routerLink: 'forms' },
    { label: 'Charts', routerLink: 'charts' }
  ];
}
