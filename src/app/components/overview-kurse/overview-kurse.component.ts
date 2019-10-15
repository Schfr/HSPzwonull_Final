import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview-kurse',
  templateUrl: './overview-kurse.component.html',
  styleUrls: ['./overview-kurse.component.scss']
})
export class OverviewKurseComponent implements OnInit {

  public kategorieID;
  public kategorieData;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.kategorieID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/courses/' + this.kategorieID + '/?_format=json')
      .subscribe((data) => {
        this.kategorieData = data;
      });
  }

}
