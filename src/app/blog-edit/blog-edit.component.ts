import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology", "Other"];

  constructor(private _route: ActivatedRoute, private router: Router, private toastr: ToastrManager, private blogHttpService: BlogHttpService) {

  }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("Current Blog Is:");
        console.log(this.currentBlog)
      },
      error => {
        console.log("some error message");
        console.log(error.errorMessage);
      }
    )
  }

  public editThisBlog(): any {

    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr("Blog Edited Succesfully", "Success!");
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.errorToastr("Some Error Occured", "Error!");
      }
    )
  }

}
