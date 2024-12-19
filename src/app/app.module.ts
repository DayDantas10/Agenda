import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule aqui

import { AppComponent } from './app.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component'; // Ajuste o caminho conforme necessário

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
