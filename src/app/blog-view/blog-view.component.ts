import { Component, OnInit, OnDestroy } from '@angular/core';
//Importing route related code
import { ActivatedRoute, Router } from '@angular/router'
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from '../blog.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  //empty object
  public currentBlog;

  //parameteres are passed to the constructor to transfer the imported module to the class.
  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService, private toastr: ToastrManager, private location: Location) { //_route and router are conventional names.

    //this.currentBlog = this.blogService.currentBlog;
    console.log("Blog-View Constructor is Called");

  }

  ngOnInit(): void {
    console.log("Blog-View ngOnInit is Called");

    //getting the blog id from the route. "this" is used to access variables in this class
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    //calling the function to get the blog with this blogId out of the overall array
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"]
      },
      error => {
        console.log("some error message");
        console.log(error.errorMessage);
      }
    )

  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.successToastr("Blog Deleted Successfully", "Success!")
        setTimeout(() => {
          this.router.navigate(['/home'])
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.errorToastr("Some Error Occured", "Error!")
      }
    )
  }

  public goBack(): any {
    this.location.back();
  }

  ngOnDestroy(): void {
    console.log("Blog-View ngOnDestroy called");
  }
}
