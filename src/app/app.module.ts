import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

//Toaster Animation Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';

//router module for setting up application level route
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import statement for service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

//Decorators - they tell the file what is being executed. "How is being executed" is handled in "export class AppModule" below.
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //routerModule forRoot method to declare the possible routes in application.
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: '**', component: NotFoundComponent }
    ]) 
  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]     //telling the application that this is the first component to load
})
export class AppModule {


}
