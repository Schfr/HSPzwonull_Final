import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview-kategories',
  templateUrl: './overview-kategories.component.html',
  styleUrls: ['./overview-kategories.component.scss']
})
export class OverviewKategoriesComponent implements OnInit {

  public categories;

  constructor(private http: HttpClient) {
    this.categories = [];
  }

  ngOnInit() {
    this.http.get('./assets/kategorien.json')
      .subscribe((data) => {
        this.categories = data;
      });
  }

}
