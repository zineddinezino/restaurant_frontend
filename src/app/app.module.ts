import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import  {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';
import { FeatureComponent } from './feature/feature.component';

import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { MybookingListComponent } from './components/mybooking-list/mybooking-list.component';
import { TableComponent } from './admin/table/table.component';
import { TableResComponent } from './admin/table-res/table-res.component';
import { BookingListComponent } from './admin/booking-list/booking-list.component';
import { OpeningTimeComponent } from './admin/opening-time/opening-time.component';
import { NewTabComponent } from './admin/new-tab/new-tab.component';
import { from } from 'rxjs';
import { EditTableComponent } from './admin/edit-table/edit-table.component';
import { BookingFormComponent } from './book/booking-form/booking-form.component';
import { EditTimeComponent } from './admin/opening-time/edit-time/edit-time.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BookComponent,
    ContactComponent,
    HomeComponent,
    TableComponent,
    TableResComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    NotfoundComponent,
    MenuComponent,
    FeatureComponent,
    BookingListComponent,
    OpeningTimeComponent,
    ProfileContentComponent,
    MybookingListComponent,
    NewTabComponent,
    EditTableComponent,
    BookingFormComponent,
    EditTimeComponent
  ],
  imports: [
    IconsModule,
    ButtonsModule,
    WavesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents:[NewTabComponent,EditTableComponent,BookingFormComponent,EditTimeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
