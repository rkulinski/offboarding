import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingFormComponent } from 'src/app/pages/offboarding-details/components/offboarding-form/offboarding-form.component';

describe('OffboardingFormComponent', () => {
  let component: OffboardingFormComponent;
  let fixture: ComponentFixture<OffboardingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardingFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OffboardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
