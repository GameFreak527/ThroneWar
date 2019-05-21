import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "news", component: NewsComponent, data: { title: "News" } },
  { path: "discussion", component: DiscussionComponent, data: { title: "Discussion" } },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "registration", component: RegistrationComponent, data: { title: "Registration" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
