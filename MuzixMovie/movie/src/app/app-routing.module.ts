import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { PlaymovieComponent } from './playmovie/playmovie.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RegisterComponent } from './register/register.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{
  path: "auth",
  component: SidebarComponent,
  children: [
    {
      path: "login",
      component: LoginComponent
    },
    {
      path: "register",
      component: RegisterComponent
    }
  ]
},


{
  path: "dashboard",
  component: DashboardComponent,
  children: [
    {
      path: "home",
      component: HomeComponent
    },

    {
      path: "movie-info",
      canActivate: [AuthGuard],
      component: MovieInfoComponent
    },
    {
      path: "recommended",
      canActivate: [AuthGuard],
      component: RecommendedComponent
    },
    {
      path: "favourite",
      canActivate: [AuthGuard],
      component: FavouriteComponent
    },
    {
      path: "search-items/:text",
      component: SearchItemsComponent
    },

    {path:"contact",
    component:ContactComponent


    },{path:"playmovie",
    component:PlaymovieComponent


    },

  ]
  },
  {
    path: "",
    redirectTo: "dashboard/home",
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
