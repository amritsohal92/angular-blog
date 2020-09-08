//this is a by-default statement. 
//This is angular's way of importing files, like header files in C/C++. 
//Currently importing Component and OnInit files.

import { Component, OnInit } from '@angular/core';

//Decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//nothing but a simple class
export class HomeComponent implements OnInit {

  //declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2020-09-08T12:20:47.854Z",
      "created": "2020-09-08T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "This is Blog 1 Description",
      "title": "This is Blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2020-09-08T12:20:47.854Z",
      "created": "2020-09-08T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is blog body</h1><p>This is a paragraph</p>",
      "description": "This is Blog 2 Description",
      "title": "This is Blog 2"
    }, {
      "blogId": "3",
      "lastModified": "2020-09-08T12:20:47.854Z",
      "created": "2020-09-08T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "This is Blog 3 Description",
      "title": "This is Blog 3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
