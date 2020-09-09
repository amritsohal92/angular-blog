import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //Dummy blog variable
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2020-09-08T12:20:47.854Z",
      "created": "2020-09-08T12:20:47.854Z",
      "tags": ["tag 1", "tag 2"],
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
      "tags": ["tag 3"],
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
    }, {
      "blogId": "4",
      "lastModified": "2020-09-08T12:20:47.854Z",
      "created": "2020-09-08T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "This is Blog 4 Description",
      "title": "This is Blog 4"
    }
  ]

  constructor() {
    console.log("service constructor is called")
  }
  
  public currentBlog;
  
  //method to return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  //method to get a particilar blog
  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop here from typescript
    console.log(currentBlogId)
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  } //end get blog information function

}
