import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public onebook:any;

  constructor(public router: ActivatedRoute, public bookservice:BookService, private route:Router) { }

  ngOnInit(): void {
    this.bookservice.getBook(this.router.snapshot.paramMap.get('id')).subscribe((data:any) => {
      this.onebook = data;
    });
  }
  deleteBook() {
    this.bookservice.deleteBook(this.router.snapshot.paramMap.get('id')).subscribe((data:any) =>{
      this.onebook = data;
    });
    this.route.navigate(['/']);
  }
  updateBook(id:number, author:string, name:string, date:string, type:string){
    this.bookservice.updateBook(id, author, name, date, type).subscribe((data:any ) => {
      this.onebook = data;
    })
    this.route.navigate(['/']);
  }
}
