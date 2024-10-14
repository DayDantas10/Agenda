export enum Tipo {
    AMIGO = 'Amigo(a)',
    FAMILIA = 'Familia',
    TRABALHO = 'Trabalho'
}

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
    private tipo: Tipo

    constructor(nome: string, tel: string, email: string, aniversario: string, tipo: Tipo) {
        this.nome = nome
        this.telefone = tel
        this.email = email
        this.aniversario = aniversario
        this.tipo = tipo
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
    alterarAniversario(aniversario: string): string {
        this.aniversario = this.aniversario
        return this.aniversario
    }
    obterTipo(): string {
        return this.tipo
    }
    alterarTipo(tipo: Tipo): Tipo {
        this.tipo = tipo
        return this.tipo
    }

}

