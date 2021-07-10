/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcommercerComponent } from './ecommercer.component';

describe('EcommercerComponent', () => {
  let component: EcommercerComponent;
  let fixture: ComponentFixture<EcommercerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
