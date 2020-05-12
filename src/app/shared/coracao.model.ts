
export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCheio: string = 'assets/coracao_cheio.png',
        public urlVazio: string = 'assets/coracao_vazio.png') { }

    public existeCoracao(): string {
        return this.cheio ? this.urlCheio : this.urlVazio;

    }
}
