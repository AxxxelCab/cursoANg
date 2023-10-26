import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/LayoutModule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
