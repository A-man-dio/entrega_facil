
export class Utilizador {
    constructor(
        public id: number,
        public nomeCompleto: string,
        public username: string,
        public senha: string,
        public numeroTelefone: number,
        public email: string
    ) { }
}