import { Injectable } from '@angular/core';

//importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable related code.
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public authToken = 'NGY4ZWMzNTU1OWM1Nzc5MTk1NjE2ZGM4OWU5NzI0YjU3ODIyMzJmNTM1ZmI3NmVhYmMzZjIyZjcwMDY2NmUxOGJiNjIyZTFhZmYyMDI5M2EwMWVjMGYxNGUwNjY0N2NhYWVlZmYwMWUxZDhlY2ZkMzVmMTBjOTJiOGMzMWNjMDBmNQ==';
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http:HttpClient) {
    console.log("Blog-HTTP Service Constructor called");
  }

  //exception handler
  private handleError(err: HttpErrorResponse){
    console.log("Handle error Http Calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }


  //method to return all blogs
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

  }

  //method to return a particular blog
  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);

    return myResponse;

  }

  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  } //end create blog

  public deleteBlog(blogId): any {
    let data = {};
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;
  } //end delete blog

  public editBlog(blogId, blogData): any {
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  } //end edit blog

}
