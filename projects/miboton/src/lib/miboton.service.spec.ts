import { TestBed } from '@angular/core/testing';

import { MibotonService } from './miboton.service';

describe('MibotonService', () => {
  let service: MibotonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MibotonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
