import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview-week',
  templateUrl: './overview-week.component.html',
  styleUrls: ['./overview-week.component.scss']
})
export class OverviewWeekComponent implements OnInit {

  public dayID;

  constructor(private http: HttpClient) {
    this.dayID = [];
  }

  ngOnInit() {
    this.http.get('./assets/wochentage.json')
      .subscribe((data) => {
        this.dayID = data;
      });
  }

}
