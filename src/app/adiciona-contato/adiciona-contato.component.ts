import { Component } from '@angular/core';
import { Agenda } from './agenda';
import { Contato, Tipo } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
inserirContato(_t9: HTMLInputElement) {
throw new Error('Method not implemented.');
}

tipos:string[]
contato:string | undefined
constructor(){
  this.tipos = Object.values(Tipo)

  const Cadastrar = () => {
    return this.contato;
  }
}
inserirContatoporNome({nome}: { nome: string;  }){

}
 
}