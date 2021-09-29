import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  public id: number;
  blog: any[];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.loadBlog();
  }

  private loadBlog() {
    this.appService.loadBlog()
      .subscribe(data => {
        this.returnFilter(data);
      })
  }

  private returnFilter(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e]);
    this.blog = result.filter(object => {
      return object['id'] == this.id;
    });
    console.log(this.blog);
  }

}
