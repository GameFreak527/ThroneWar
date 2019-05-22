import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { BattlegroundComponent } from './pages/debate/battleground/battleground.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { AddThreadComponent } from './pages/discussion/add-thread/add-thread.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "news", component: NewsComponent, data: { title: "News" } },
  { path: "discussion", component: DiscussionComponent, data: { title: "Discussion" } },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "registration", component: RegistrationComponent, data: { title: "Registration" } },
  { path: "battleground", component: BattlegroundComponent, data: { title: "Battle Ground" } },
  { path: "profile/:id", component: ProfileComponent, data: { title: "User Profile" } },
  { path: "addthread", component: AddThreadComponent, data: { title: "Add Discussion Thread" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
