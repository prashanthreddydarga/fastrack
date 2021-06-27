import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ContactComponent } from './contact/contact.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TrendingComponent } from './trending/trending.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'appliances',component:AppliancesComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'trending',component:TrendingComponent},
  {path:'contact',component:ContactComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
