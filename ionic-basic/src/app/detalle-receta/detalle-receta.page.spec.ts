import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleRecetaPage } from './detalle-receta.page';

describe('DetalleRecetaPage', () => {
  let component: DetalleRecetaPage;
  let fixture: ComponentFixture<DetalleRecetaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
