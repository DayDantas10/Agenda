import { Component } from '@angular/core';
import { Agenda } from './agenda';
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {

inserirContato({ nome, telefone, email, aniversario }: { nome: string; telefone: string; email: string; aniversario: Date; }){

}
 
}