import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-header-lower',
  templateUrl: './header-lower.component.html',
  styleUrls: ['./header-lower.component.css']
})
export class HeaderLowerComponent implements OnInit {

  activeFragment = this.route.fragment.pipe(share());

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
