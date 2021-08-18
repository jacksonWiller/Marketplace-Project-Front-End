import { Component, OnInit, TemplateRef } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-admin-produtos-list',
  templateUrl: './admin-produtos-list.component.html',
  styleUrls: ['./admin-produtos-list.component.scss']
})
export class AdminProdutosListComponent implements OnInit {

  public produtos: Produto[] = [];
  public modalRef!: BsModalRef;
  public produtoId = null;
  public rowNum = 0;


  constructor(private produtoService: ProdutoService,
              private modalService: BsModalService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService

    ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.carregarProdutos();
  }

  openModal(event: any, template: TemplateRef<any>, produtoId: string): void {
    event.stopPropagation();
    this.produtoId = produtoId;
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    this.modalRef.hide();
    // this.spinner.show();

    this.produtoService.deleteProduto(this.produtoId).subscribe(

      (result: any) => {
        if (result.message === 'Deletado') {
          this.toastr.success('O produto foi deletado com Sucesso.', 'Deletado!');
          this.spinner.hide();
          this.carregarProdutos();
        }
      },
      (error: any) => {
        console.error(error);
        this.toastr.error(`Erro ao tentar deleter o evento ${this.produtoId}`, 'Erro');
        this.spinner.hide();
      },
      () => this.spinner.hide(),
    );
  }

  decline(): void {
    this.modalRef.hide();
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  salvarAlteracao(): void{
  }

  // Get eventos observibles
  public carregarProdutos(): void {
    this.produtoService.getAllProdutos().subscribe({
      next: (produtos: Produto[]) => {
        this.produtos = produtos;
      },
      error: (error: any) => {
        // this.spinner.show();
        this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
        },
      complete: () => this.spinner.hide()
    });
  }

}
