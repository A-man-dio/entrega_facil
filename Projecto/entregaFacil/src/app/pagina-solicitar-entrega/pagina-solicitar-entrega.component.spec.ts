import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSolicitarEntregaComponent } from './pagina-solicitar-entrega.component';

describe('PaginaSolicitarEntregaComponent', () => {
  let component: PaginaSolicitarEntregaComponent;
  let fixture: ComponentFixture<PaginaSolicitarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSolicitarEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSolicitarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
