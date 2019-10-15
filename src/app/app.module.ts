import {BrowserModule} from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule, MatSelectModule, MatTableModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DetailNewsComponent} from './components/detail-news/detail-news.component';
import {DetailTopkursComponent} from './components/detail-topkurs/detail-topkurs.component';
import {DetailKursComponent} from './components/detail-kurs/detail-kurs.component';
import {OverviewKategoriesComponent} from './components/overview-kategories/overview-kategories.component';
import {OverviewKurseComponent} from './components/overview-kurse/overview-kurse.component';
import {OverviewWeekComponent} from './components/overview-week/overview-week.component';
import {OverviewKurseamwochentagComponent} from './components/overview-kurseamwochentag/overview-kurseamwochentag.component';
import {HomeComponent} from './components/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { ImpressumComponent } from './components/impressum/impressum.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailNewsComponent,
    DetailTopkursComponent,
    DetailKursComponent,
    OverviewKategoriesComponent,
    OverviewKurseComponent,
    OverviewWeekComponent,
    OverviewKurseamwochentagComponent,
    HomeComponent,
    MyNavComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatTableModule
  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
