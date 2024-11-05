import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from'@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { provideHttpClient,withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './Lists/projects/projects.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddnewprojectComponent } from './addnewproject/addnewproject.component';
import { AddNewprojectComponent } from './add-newproject/add-newproject.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    AddnewprojectComponent,
    AddNewprojectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
 
    // provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
