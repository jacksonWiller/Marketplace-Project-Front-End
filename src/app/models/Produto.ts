export interface Produto {

    id: number;
    nome: string;
    descricao: string;
    observacao: string;
    valor: number;
    qtdEstoque: number;
    estado: boolean;
    dataCadastro: Date;
    dataAlteracao: Date;
    // produtosCategorias: Date;
}
