import { Component } from '@angular/core';
import { Agenda } from './agenda';
import { Contato, Tipo } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {

tipos:string[]
contato:string
constructor(){
  Cadastrar() = new Contato('','','','',"")
  this.tipos = Object.values(Tipo)

  function Cadastrar() {
    return this.contato;
  }
}
inserirContato({ nome, telefone, email, aniversario }: { nome: string; telefone: string; email: string; aniversario: Date; }){

}
 
}