import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyprofileComponent } from './modules/companyprofile/companyprofile.component';
import { DrgamalComponent } from './modules/drgamal/drgamal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AchievementComponent } from './modules/achievement/achievement.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ImagePopupComponent } from './modules/image-popup/image-popup.component';
import { BlogdetailsComponent } from './modules/blogdetails/blogdetails.component';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CompanyprofileComponent,
    DrgamalComponent,
    AchievementComponent,
    BlogComponent,
    ImagePopupComponent,
    BlogdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Duration for which the toast message will be displayed (in milliseconds)
      positionClass: 'toast-top', // Position where the toast message will be displayed
      closeButton: true, // Show a close button on the toast message
      progressBar: true, // Show a progress bar indicating the time remaining for the toast message
      preventDuplicates: true, // Prevent duplicate toast messages
      // Other configuration options...
    }),
    LazyLoadImageModule,
    SharedModule
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks} // <-- Declare that you want to use ScrollHooks
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
