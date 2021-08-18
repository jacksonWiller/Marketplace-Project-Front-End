export interface Produto {
    id: string;
    nome: string;
    descricao: string;
    observacao: string;
    valor: number;
    quantidadeEmEstoque: number;
    estado: boolean;
    dataCadastro: Date;
    dataAlteracao: Date;
    // produtosCategorias: Date;
}
