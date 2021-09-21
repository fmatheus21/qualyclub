import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/service/script.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  breadcrumb: string;

  constructor(private scriptService: ScriptService) { }

  ngOnInit(): void {
    this.breadcrumb = this.scriptService.returnBreadcrumb();
  }

}
