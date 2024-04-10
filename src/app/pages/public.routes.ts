import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";


export const PUBLIC_ROUTES: Routes = [
  {path: '', component: HomeComponent, title: 'Home'},
  {path: 'home', redirectTo: ''},
  {path: 'login', component: LoginComponent, title: 'Login'}
]
