import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';



const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'contact', component: ContactpageComponent},
  {path: '', component: HomepageComponent},
  {path: '**', component: ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
