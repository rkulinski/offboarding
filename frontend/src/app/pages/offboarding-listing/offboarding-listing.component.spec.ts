import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingListingComponent } from './offboarding-listing.component';

describe('OffboardingListingComponent', () => {
  let component: OffboardingListingComponent;
  let fixture: ComponentFixture<OffboardingListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardingListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OffboardingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
