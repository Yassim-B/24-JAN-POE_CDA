import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './composants/titre/titre.component';
import { TousLesSuperHerosComponent } from './composants/tous-les-super-heros/tous-les-super-heros.component';
import { UnSeulSuperHeroComponent } from './composants/un-seul-super-hero/un-seul-super-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    TousLesSuperHerosComponent,
    UnSeulSuperHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
