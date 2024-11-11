import { Component } from '@angular/core';
import { TipoContato } from '../../../tipo-contato.enum';
import { AgendaService } from '../../agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})

export class AdicionaContatoComponent {
inserirContato(arg0: string,arg1: string,arg2: any,arg3: string,arg4: string,arg5: string,arg6: () => string,arg7: string,arg8: any) {
throw new Error('Method not implemented.');
}
tel: any;
  TipoContato(TipoContato: any) {
  }
  tipos:string[]

  nome:string = '';
  telefone:string = '';
  email:string = '';
  aniversario: Date | null = null;
  tipo: TipoContato = TipoContato.AMIGO;
  tipoContatoEnum = Object.values(this.TipoContato)
  
   constructor(public agenda:AgendaService){
      this.tipos = Object.values(TipoContato)
    }
    
}