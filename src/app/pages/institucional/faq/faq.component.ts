import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/service/script.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) { }

  ngOnInit(): void {
    this.scriptService.loadExternalScript('./assets/js/script.js').then(() => { }).catch(() => { });
  }

}
