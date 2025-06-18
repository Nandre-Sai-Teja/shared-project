import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponentComponent } from './shared-component/shared-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shared-project';
}
