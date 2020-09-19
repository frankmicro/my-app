import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  books: Book[];

  first = 0;

  last = 2;

  rows = 10;

  constructor(private bookService: BookService) { }

  ngOnInit() {
      this.bookService.getBooks().
      then(books => this.books = books);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

}