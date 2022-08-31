import { TestBed } from '@angular/core/testing';

import { FilmsInterfaceService } from './films.interface.service';

describe('FilmsInterfaceService', () => {
  let service: FilmsInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
