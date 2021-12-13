import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  BASE_URL:string = "http://localhost:5001";


  constructor(public http:HttpClient) {

  }
  getBooks(){
    return this.http.get(this.BASE_URL + '/books');
  }

  getBook(id:number | null | string){
    return this.http.get(this.BASE_URL + '/books/' + id);
  }

  addBook(author:any, name:any, date:any, type:any, rating:any, cover:any){
    return this.http.post(this.BASE_URL + '/add', {author, name, date, type, rating, cover});
  }

  deleteBook(id:number | null | string){
    return this.http.get(this.BASE_URL + '/delete/' + id);
  }

  updateBook(id:any, author:any, name:any, date:any, type:any, rating:any){
    return this.http.post(this.BASE_URL + '/update/', {id, author, name, date, type, rating});
  }

}
