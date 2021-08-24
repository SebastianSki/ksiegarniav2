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
  public Book:any = {author:'', name:'', date:'', type:'', rating:''};
  public alert:any = "";
  cover:string | undefined | null | ArrayBuffer;
  constructor(public bookService:BookService) {

  }

  ngOnInit(): void {
  }

  addBook(author:string, name:string, date:string, type:string, rating:string){
    this.bookService.addBook(author, name, date, type, rating, this.cover).subscribe(r => this.alert = r);

  }
    getBase64(event:any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
      reader.onload = function () {
      me.cover = reader.result;
      console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }

}
