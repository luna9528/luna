import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCompraComponent }  from './agregar-editar-compra.component';

describe('AgregarEditarCompraComponent', () => {
  let component: AgregarEditarCompraComponent;
  let fixture: ComponentFixture<AgregarEditarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
