import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { saveAs } from 'file-saver';
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  public Book:any = {author:'', name:'', date:'', type:''};
  public alert:any = "";
  constructor(public bookService:BookService) {

  }

  ngOnInit(): void {
  }

  addBook(author:string, name:string, date:string, type:string ){
    this.bookService.addBook(author, name, date, type).subscribe(r => this.alert = r);
  }
}
