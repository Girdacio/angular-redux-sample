import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardContadorComponent } from './card-contador/card-contador.component';
import { MatButtonModule } from '@angular/material/button';
import { CardGerenciadorContadorComponent } from './card-gerenciador-contador/card-gerenciador-contador.component';

const APP_COMPONENTS = [
  AppComponent,
  CardContadorComponent,
  CardGerenciadorContadorComponent
]

const MATERIAL_COMPONENT_MODULES = [
  MatCardModule,
  MatButtonModule
]

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
]

@NgModule({
  declarations: [
    ...APP_COMPONENTS
  ],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_COMPONENT_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
