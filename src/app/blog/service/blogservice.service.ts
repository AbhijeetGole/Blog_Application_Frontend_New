import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogserviceService {
  BASE_URL: string = environment.BlogApi;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: JSON.parse(localStorage.getItem('currentUser') || '{}').token,
    }),
  };
  getAllBlogs() {
    return this.http.get(this.BASE_URL + '/');
  }

  writeBlog(blog: any) {
    return this.http.post(this.BASE_URL, blog, this.httpOptions);
  }

  getBlogbyId(id: string) {
    return this.http.get(this.BASE_URL + id);
  }

  deleteblog(id: any) {
    return this.http.delete(this.BASE_URL + id, this.httpOptions);
  }

  editblog(id: any, blog: any) {
    return this.http.put(this.BASE_URL + id, blog, this.httpOptions);
  }

  postComment(id: string, comment: any) {
    return this.http.post(
      this.BASE_URL + id + '/commentsPost',
      comment,
      this.httpOptions
    );
  }

  getallComments(id: string) {
    return this.http.get(this.BASE_URL + id + '/commentsGet', this.httpOptions);
  }

  getCommentById(id: string, comment_id: string) {
    return this.http.get(
      this.BASE_URL + id + '/comments/' + comment_id,
      this.httpOptions
    );
  }

  updateComment(id: string, comment_id: string, comment: any) {
    return this.http.put(
      this.BASE_URL + id + '/comments/' + comment_id,
      comment,
      this.httpOptions
    );
  }

  deleteComment(id: string, comment_id: string) {
    return this.http.delete(
      this.BASE_URL + id + '/comments/' + comment_id,
      this.httpOptions
    );
  }

  addNremoveLike(id: any, blog: any) {
    return this.http.put(this.BASE_URL + id + '/like', blog, this.httpOptions);
  }

  getUserbyId(id: string) {
    return this.http.get(
      environment.UserIdApi + id
    );
  }
}
