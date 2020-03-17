import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppHeroComponent } from './app-hero/app-hero.component';
import { AppExpandareaComponent } from './app-expandarea/app-expandarea.component';
import { AppContentComponent } from './app-content/app-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHeroComponent,
    AppExpandareaComponent,
    AppContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
