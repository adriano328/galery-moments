import { TestBed } from '@angular/core/testing';

import { MessagsService } from './messags.service';

describe('MessagsService', () => {
  let service: MessagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
