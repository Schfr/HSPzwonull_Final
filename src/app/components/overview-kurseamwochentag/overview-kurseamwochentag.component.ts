import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview-kurseamwochentag',
  templateUrl: './overview-kurseamwochentag.component.html',
  styleUrls: ['./overview-kurseamwochentag.component.scss']
})
export class OverviewKurseamwochentagComponent implements OnInit {

  public weekdayID;
  public weekdayData;
  public weekday;
  public kategories;
  displayedColumns: string[] = ['field_kategorie', 'field_kursverknuepfung', 'field_ort', 'field_uhrzeit_beginn', 'hier_Klicken'];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.weekdayID = [];
    this.weekdayData = [];
    this.weekday = [];
    this.kategories = [];
  }

  ngOnInit() {

    this.weekdayID = this.route.snapshot.paramMap.get('id');

    this.http.get('./assets/kategorien.json')
      .subscribe((data) => {
        this.kategories = data;
      });

    this.http.get('./assets/wochentage.json')
      .subscribe((data) => {
        this.weekday = data;
      });

    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + this.weekdayID + '/?_format=json')
      .subscribe((data) => {
        this.weekdayData = data;
      });
  }

}
