import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [HelloWorldComponent,CustomButtonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', custom);

    const customButton = createCustomElement(CustomButtonComponent, {injector: injector});
    customElements.define('app-custom-button', customButton);
  }
}
