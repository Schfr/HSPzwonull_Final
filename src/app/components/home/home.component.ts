import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public news;
  public topcourses;

  constructor(private http: HttpClient) {
    this.news = [];
    this.topcourses = [];
  }

  ngOnInit() {


  }

}
