import { TestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppServiceService', () => {
  let service: AppServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],

    }).compileComponents();
    
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
