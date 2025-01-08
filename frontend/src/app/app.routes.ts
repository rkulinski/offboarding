import { Routes } from '@angular/router';
import { OffboardingListingComponent } from 'src/app/pages/offboarding-listing/offboarding-listing.component';
import { OffboardingDetailsComponent } from 'src/app/pages/offboarding-details/offboarding-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/offboarding', pathMatch: 'full' }, // For convenience of using app
  { path: 'offboarding', component: OffboardingListingComponent },
  { path: 'offboarding/:id', component: OffboardingDetailsComponent },
];
