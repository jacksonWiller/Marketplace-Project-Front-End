/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminProdutosDetailComponent } from './admin-produtos-detail.component';

describe('AdminProdutosDetailComponent', () => {
  let component: AdminProdutosDetailComponent;
  let fixture: ComponentFixture<AdminProdutosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdutosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
