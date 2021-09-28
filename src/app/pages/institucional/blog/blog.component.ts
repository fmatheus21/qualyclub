import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.loadBlog();
  }

  private loadBlog() {
    this.blogService.findAll()
      .subscribe(data => {
        this.blog = data;
        console.log(this.blog)
      })
  }

}
