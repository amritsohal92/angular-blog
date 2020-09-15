//this is a by-default statement. 
//This is angular's way of importing files, like header files in C/C++. 
//Currently importing Component and OnInit files.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service'

//Decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//nothing but a simple class
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs=[];

  constructor(public blogHttpService: BlogHttpService) { //Initializing the service
    console.log("Home Component Contructor");
  }

  ngOnInit(): void {
    console.log("Home Component ngOnInit");
    //this.allBlogs = this.blogHttpService.getAllBlogs(); //This cannot work as Http service by default returns an observable.

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      
      data => {
        console.log("logging data");
        console.log(data);
        this.allBlogs = data["data"]
      },
      error => {
        console.log("some error message");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allBlogs);
  }

  ngOnDestroy(): void {
    console.log("Home Component ngOnDestry");
  }

}
