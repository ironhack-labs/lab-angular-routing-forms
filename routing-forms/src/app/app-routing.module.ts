import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "contact",
    component: ContactpageComponent,
  },
  {
    path: "**",
    component: ErrorpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
