import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingListingComponent } from './offboarding-listing.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('OffboardingListingComponent', () => {
  let component: OffboardingListingComponent;
  let fixture: ComponentFixture<OffboardingListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardingListingComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OffboardingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
