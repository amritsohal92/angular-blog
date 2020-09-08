import { Component, OnInit } from '@angular/core';
//Importing route related code
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  //empty object
  public currentBlog;
  //declare a dummy blog variable
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
    }
  ]

  //parameteres are passed to the constructor to transfer the imported module to the class.
  constructor(private _route: ActivatedRoute, private router: Router) { //_route and router are conventional names.
    console.log("Constructor is Called");
  }

  ngOnInit(): void {
    console.log("ngOnInit is Called");

    //getting the blog id from the route. "this" is used to access variables in this class
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    //calling the function to get the blog with this blogId out of the overall array
    this.getSingleBlogInformation(myBlogId);
  }

  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop here from typescript

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
  } //end get blog information function

}
