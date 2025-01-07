import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { OffboardingDetailsComponent } from './offboarding-details.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('OffboardingDetailsComponent', () => {
  let component: OffboardingDetailsComponent;
  let fixture: ComponentFixture<OffboardingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardingDetailsComponent, RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(OffboardingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
