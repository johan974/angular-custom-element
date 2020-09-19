import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-elements-custom-button';
  buttonClickCount = 0;
  showMessage() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-world label=\"initialized\"></app-hello-world>';

    const customButtonHere =  document.getElementById('custom-button-here');
    customButtonHere.innerHTML = '<app-custom-button label=\"' + this.buttonClickCount + '\" (action)="handleAction($event)"></app-custom-button>';
  }

  handleAction() {
    this.buttonClickCount++;
  }
}
