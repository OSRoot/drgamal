import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrgamalComponent } from './modules/drgamal/drgamal.component';
import { CompanyprofileComponent } from './modules/companyprofile/companyprofile.component';
import { AchievementComponent } from './modules/achievement/achievement.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogdetailsComponent } from './modules/blogdetails/blogdetails.component';

const routes: Routes = [
  {
    path: '',
    component:DrgamalComponent,
  },
  {
    path: 'Achievements',
    component:AchievementComponent,

  },
  {
    path: 'Blog',
    component:BlogComponent,
  },
  {
    path: 'BlogDetails/:id',
    component:BlogdetailsComponent,
  },
  {
    path: 'company-profile',
    component:CompanyprofileComponent
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
