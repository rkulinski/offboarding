import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingFormComponent } from 'src/app/pages/offboarding-details/components/offboarding-form/offboarding-form.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('OffboardingFormComponent', () => {
  let component: OffboardingFormComponent;
  let fixture: ComponentFixture<OffboardingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardingFormComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OffboardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
