import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';

import { LoginComponent } from './components/login/login.component';
import { BeforeLoginService } from './services/before-login.service';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AfterLoginService } from './services/after-login.service';

import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';
import { FeatureComponent } from './feature/feature.component';

import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { MybookingListComponent } from './components/mybooking-list/mybooking-list.component';
import { BookingListComponent } from './admin/booking-list/booking-list.component';
import { TableResComponent } from './admin/table-res/table-res.component';
import { TableComponent } from './admin/table/table.component';
import { OpeningTimeComponent } from './admin/opening-time/opening-time.component';


// todo center the content of home page
// the login page try to change it make it vertically desig


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book', component: BookComponent },
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'profile', component: ProfileComponent, /*//canActivate: [AfterLoginService], to be able to reach this page */
  children : [
    { path: 'profile-content' , component: ProfileContentComponent , outlet: 'outlet1' }
  ] },
 /* { path: 'profile-content' , component: ProfileContentComponent},*/
  { path: 'TableRes' , component : TableResComponent, canActivate : [AfterLoginService]},
  { path: 'menu', component: MenuComponent},
  { path: 'feature', component: FeatureComponent},
  { path: 'bookList', component: BookingListComponent},
  { path: 'openTime', component: OpeningTimeComponent},
  { path: 'res', component: MybookingListComponent},
  { path: 'edit/:id', component: MybookingListComponent},
  { path: '**' , component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
