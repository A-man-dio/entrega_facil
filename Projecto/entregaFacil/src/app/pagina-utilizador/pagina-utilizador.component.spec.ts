import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUtilizadorComponent } from './pagina-utilizador.component';

describe('PaginaUtilizadorComponent', () => {
  let component: PaginaUtilizadorComponent;
  let fixture: ComponentFixture<PaginaUtilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaUtilizadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaUtilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
