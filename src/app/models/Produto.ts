export interface Produto {

    id: number;
    nome: string;
    descricao: string;
    observacao: string;
    valor: number;
    quantidadeEmEstoque: number;
    estado: boolean;
    dataDeCriacao: Date;
    dataDeAlteracao: Date;
    // produtosCategorias: Date;
}
