import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-spis',
  templateUrl: './spis.component.html',
  styleUrls: ['./spis.component.scss']
})
export class SpisComponent implements OnInit {

  constructor(public bookService:BookService) { }
  public books:any;

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data:any) => {
      this.books = data;
    })
  }






}
