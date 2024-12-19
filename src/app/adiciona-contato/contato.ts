import { TipoContato } from '../../../tipo-contato.enum';

export class Contato {
    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: string; // Usando string conforme opção
    private tipo: TipoContato;

    constructor(nome: string, telefone: string, email: string, aniversario: string, tipo: TipoContato) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.aniversario = aniversario;
        this.tipo = tipo;
    }

   
    obterNome(): string {
        return this.nome;
    }

    obterTelefone(): string {
        return this.telefone;
    }

    obterEmail(): string {
        return this.email;
    }

    obterAniversario(): string {
        return this.aniversario;
    }

    obterTipo(): TipoContato {
        return this.tipo;
    }

    alterarNome(nome: string): void {
        this.nome = nome;
    }

    alterarTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    alterarEmail(email: string): void {
        this.email = email;
    }

    alterarAniversario(aniversario: string): void {
        this.aniversario = aniversario;
    }

    alterarTipo(tipo: TipoContato): void {
        this.tipo = tipo;
    }
}
