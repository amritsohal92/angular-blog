import { Component, OnInit, OnDestroy } from '@angular/core';
//Importing route related code
import { ActivatedRoute, Router } from '@angular/router'
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  //empty object
  public currentBlog;

  //parameteres are passed to the constructor to transfer the imported module to the class.
  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService) { //_route and router are conventional names.
    
    //this.currentBlog = this.blogService.currentBlog;
    console.log("Blog-View Constructor is Called");
  }

  ngOnInit(): void {
    console.log("Blog-View ngOnInit is Called");

    //getting the blog id from the route. "this" is used to access variables in this class
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    //calling the function to get the blog with this blogId out of the overall array
    this.blogService.getSingleBlogInformation(myBlogId);

    this.currentBlog = this.blogService.currentBlog;
  }

  ngOnDestroy(): void {
    console.log("Blog-View ngOnDestroy called");
  }
}
