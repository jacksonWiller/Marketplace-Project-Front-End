import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-produtos-add',
  templateUrl: './admin-produtos-add.component.html',
  styleUrls: ['./admin-produtos-add.component.scss']
})
export class AdminProdutosAddComponent implements OnInit {

  form!: FormGroup;
  produto = {} as Produto;


  get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder,
              private router: ActivatedRoute,
              private produtoService: ProdutoService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService
    ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.validation();
    // this.carregarEvento();
  }


    // id: number;
    // nome: string;
    // descricao: string;
    // observacao: string;
    // valor: number;
    // qtdEstoque: number;
    // estado: boolean;
    // dataCadastro: Date;
    // dataAlteracao: Date;

  public validation(): void {
    this.form = this.formBuilder.group({
      nome: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(10)]
      ],
      descricao: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(100)]
      ],
      observacao: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(100)]
      ],
      valor: ['', [Validators.required, Validators.max(120000)]],
      quantidadeEmEstoque: ['', [Validators.required, Validators.max(120000)]]
    });
  }

  public carregarEvento(): void {
    const produtoIdParam = this.router.snapshot.paramMap.get('id');

    if (produtoIdParam !== null ) {
      this.produtoService.getPeodutoById(+produtoIdParam).subscribe({
        next: (produto: Produto) => {
          this.produto = {...produto}; // copiando produto e não apotando para o espaço de memoria
          this.form.patchValue(this.produto);
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {},
      });
    }
  }

  public salvarAlteracao(): void{
    // this.spinner.show();
    const produtoIdParam = this.router.snapshot.paramMap.get('id');
    console.log('Executando Salvar');
    if (this.form.valid){
      console.log('form valido');
      this.produto = {...this.form.value}; // passar os valores do form para objeto

      if (produtoIdParam !== null ){
        this.produtoService.putProduto(+produtoIdParam , this.produto).subscribe(
          () => this.toastr.success('Produto salvo com sucesso!', 'Sucesso'),
          (error: any) => {
            console.error(error);
            console.log(this.produto);
            this.spinner.hide(),
            this.toastr.error('Erro ao salvar produto', 'Erro');
          },
          () => this.spinner.hide()
        );
      }
      else{
        this.produtoService.postProduto(this.produto).subscribe(
          () => this.toastr.success('Produto salvo com sucesso!', 'Sucesso'),
          (error: any) => {
            console.error(error);
            this.spinner.hide(),
            this.toastr.error('Erro ao salvar produto', 'Erro');
          },
          () => this.spinner.hide()
        );
      }
    }
  }

  public resetForm(): void{

  }

}
