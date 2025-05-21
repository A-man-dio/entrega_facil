import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEscolherCadastroComponent } from './pagina-escolher-cadastro.component';

describe('PaginaEscolherCadastroComponent', () => {
  let component: PaginaEscolherCadastroComponent;
  let fixture: ComponentFixture<PaginaEscolherCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaEscolherCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEscolherCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
