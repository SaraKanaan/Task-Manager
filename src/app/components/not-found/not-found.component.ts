import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private title : Title) {
    this.title.setTitle('Erorr Page');
    console.log(this.title.getTitle());
   }

  ngOnInit(): void {
  }

}
