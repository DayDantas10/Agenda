import { TipoContato } from "../../../tipo-contato.enum"
export class Contato {
    static obterMatriculados(): any {
        throw new Error("Method not implemented.")
    }
    static obterContatos(): any {
        throw new Error("Method not implemented.")
    }
    private nome: string
    private telefone: string
    private email: string
    private aniversario: string
    private tipo: TipoContato
    private favorito: boolean

    constructor(nome: string, tel: string, email: string, aniversario: string, tipo: TipoContato, fav:boolean) {
        this.nome = nome
        this.telefone = tel
        this.email = email
        this.aniversario = aniversario
        this.tipo = tipo
        this.favorito = fav
    }

    obterNome(): string {
        return this.nome
    }
    alterarNome(nome: string): string {
        this.nome = nome
        return this.nome
    }
    ObterTelefone(): string {
        return this.telefone
    }
    alterarTelefone(telefone: string): string {
        this.telefone = telefone
        return this.telefone
    }
    obterEmail(): string {
        return this.email
    }
    alterarEmail(email: string): string {
        this.email = email
        return this.email
    }
    obterAniversario(): string{
        return this.aniversario
    }
    alterarAniversario(_aniversario: string): string {
        this.aniversario = this.aniversario
        return this.aniversario
    }
    obterTipo(): string {
        return this.tipo
    }
    alterarTipo(tipo: TipoContato): TipoContato {
        this.tipo = tipo
        return this.tipo
    }

}

