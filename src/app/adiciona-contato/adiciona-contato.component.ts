import { Component } from '@angular/core';
import { TipoContato } from '../../../tipo-contato.enum';
import { Contato } from './contato';
import { AgendaService } from '../../agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  tipos: string[];
  nome: string = '';
  telefone: string = '';
  email: string = '';
  aniversario: Date | null = null;
  tipo: TipoContato = TipoContato.AMIGO;
  contatos: Contato[] = [];

  constructor(public agenda: AgendaService) {
    this.tipos = Object.values(TipoContato);
  }

  inserirContato(): void {
    const novoContato = new Contato(this.nome, this.telefone, this.email, this.aniversario ? this.aniversario.toString() : '', this.tipo);
    this.contatos.push(novoContato);
    // Aqui você pode adicionar a lógica para salvar o contato no serviço AgendaService, se necessário
  }
}
