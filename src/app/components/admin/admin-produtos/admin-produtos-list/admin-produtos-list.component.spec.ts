/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminProdutosListComponent } from './admin-produtos-list.component';

describe('AdminProdutosListComponent', () => {
  let component: AdminProdutosListComponent;
  let fixture: ComponentFixture<AdminProdutosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdutosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
