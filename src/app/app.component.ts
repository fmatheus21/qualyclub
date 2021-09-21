import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ScriptService } from './service/script.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  breadcrumb: string;
  private whatsappNumber: string = '5521981964019';
  whatsappUrl: string;

  constructor(
    private scriptService: ScriptService,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadTitlePage();
    this.whatsappUrl = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}`
  }


  private loadTitlePage() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
        this.breadcrumb = event['breadcrumb'];
        this.scriptService.storeBreadcrumb(this.breadcrumb);
      });
  }

}
