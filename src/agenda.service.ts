import { Injectable } from '@angular/core';
import { Contato } from './app/adiciona-contato/contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
    contatos: Contato[]
 
    constructor() { this.contatos = [] }

    /** Verifica se o contato já foi adicionado. 
     * Use na condição do método adicionar. O contato
     * deve ser adicionado apenas se ele não existir.
     */
    existe(ct: Contato): boolean {
      return false
    }

    adicionar(contato: Contato) {
        if (!this.contatos.includes(contato)) {
            this.contatos.push(contato);
        }
    }

    /** Devolve apenas o contatos favoritos */
    obterFavoritos(): Contato[] {
      return this.contatos;
    }

    obterTodos(): Contato[] { 
      return this.contatos; 
    }

    /** Devolve um contato dado o seu telefone */
    obterContatoPeloTelefone(tel: string): Contato {
      return new Contato('', '', '', '', '', '', '');
    }
}
