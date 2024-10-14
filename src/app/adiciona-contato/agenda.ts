import { Contato, Tipo} from "./contato";

export class Agenda{
    private contatos: Contato[] = []


inserirContato(contato: Contato): boolean {
    if (this.ContatosExistentes(contato.obterNome())) {
        console.log(`O contato ${contato.obterNome()} já está na agenda.`)
        return false
    } else {
        this.contatos.push(contato);
        console.log(`O contato ${contato.obterNome()} foi adicionado com sucesso à agenda.`)
        return true
    }
}
obterContatos():Contato[]{
    return this.contatos
}

obterContatoPorEmail(email: string): Contato | undefined {
    for (let contato of this.contatos) {
        if (contato.obterEmail() === email) {
            return contato
        }
    }
    return undefined
}
obterContatoPorTelefone(telefone: string): Contato | undefined {
    for (let contato of this.contatos) {
        if (contato.ObterTelefone() === telefone) {
            return contato
        }
    }
    return undefined
}
obterContatoPorNome(nome: string): Contato | undefined {
    for (let contato of this.contatos) {
        if (contato.obterNome() === nome) {
            return contato
        }
    }
    return undefined
}

private ContatosExistentes(nome:string):boolean{
    for (let contato of this.contatos) {
        if (contato.obterNome() === nome) {
            return true
        }
    } return  false
}
}

