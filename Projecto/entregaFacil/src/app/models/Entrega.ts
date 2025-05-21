export class Entrega {
    constructor(
        public id: number,
        public nome: string,
        public localizacao: string,
        public destino: string,
        public preco: number,
        public estado: string,
        public idEmpresa: number,
        public idUtilizador: number
    ) { }
}