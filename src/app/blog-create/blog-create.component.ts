import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrManager) {
  }

   //API properties
   public blogTitle: string;
   public blogBodyHtml: string;
   public blogDescription: string;
   public blogCategory: string;
   public possibleCategories = ["Comedy","Drama","Action","Technology","Other"]; 

  ngOnInit(): void {
  }

  public createBlog(): any{

    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }// end blog data

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.successToastr("Blog Created Successfully", "Success!");
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId])
        }, 2000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.errorToastr("Some Error Occured");
      }
    )


  }

}
