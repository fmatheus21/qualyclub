import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/service/script.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) { }

  ngOnInit(): void {
    //this.scriptService.loadExternalScript('./assets/js/script.js').then(() => { }).catch(() => { });
  }

}
