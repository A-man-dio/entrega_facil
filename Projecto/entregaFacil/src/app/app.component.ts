import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgToastComponent, NgToastModule } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'entregaFacil';
}
