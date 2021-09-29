import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadBlog();
  }

  private loadBlog() {
    this.appService.loadBlog()
      .subscribe(data => {
        this.blog = data;
      })
  }

}
