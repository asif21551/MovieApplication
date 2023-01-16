import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecommendedComponent } from './recommended/recommended.component';
import { FavouriteComponent } from './favourite/favourite.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HoverDirective } from './hover.directive';
import { SearchItemsComponent } from './search-items/search-items.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PlaymovieComponent } from './playmovie/playmovie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MovieInfoComponent,
    RecommendedComponent,
    FavouriteComponent,
    HoverDirective,
    SearchItemsComponent,
    CardComponent,
    ContactComponent,
    PlaymovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,MatCardModule,MatIconModule,MatGridListModule
    ,MatButtonModule,MatSidenavModule,MatToolbarModule,MatListModule,MatMenuModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,
    LayoutModule,FlexLayoutModule,MatTooltipModule,MatSnackBarModule
  ],
  providers: [RecommendedComponent,FavouriteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
