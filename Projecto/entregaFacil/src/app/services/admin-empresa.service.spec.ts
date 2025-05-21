import { TestBed } from '@angular/core/testing';

import { AdminEmpresaService } from './admin-empresa.service';

describe('AdminEmpresaService', () => {
  let service: AdminEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
