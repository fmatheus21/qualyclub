import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.css']
})
export class BannerSectionComponent implements OnInit {

  banner: any[];

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit(): void {
  }

  private loadBanner() {
    this.appService.loadBanner()
      .subscribe(data => {
        this.banner = data;
        console.log(this.banner)
      })
  }


}
