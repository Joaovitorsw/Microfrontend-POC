import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard-angular';
  list = [{ message: 'Angular' }, { message: 'App' }];
  log(event: Event) {
    console.log(event);
  }
}
