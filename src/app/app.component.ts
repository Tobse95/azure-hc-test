import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello Tobias {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
