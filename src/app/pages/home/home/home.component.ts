import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/service/script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) { }

  ngOnInit(): void {
    this.scriptService.loadExternalScript('./assets/js/script.js').then(() => { }).catch(() => { });
  }

}
