//this is a by-default statement. 
//This is angular's way of importing files, like header files in C/C++. 
//Currently importing Component and OnInit files.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

//Decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//nothing but a simple class
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs;

  constructor(public blogService: BlogService) {
    console.log("Home Component Contructor");
  }

  ngOnInit(): void {
    console.log("Home Component ngOnInit");
    this.allBlogs = this.blogService.getAllBlogs();
  }

  ngOnDestroy(): void {
    console.log("Home Component ngOnDestry");
  }

}
