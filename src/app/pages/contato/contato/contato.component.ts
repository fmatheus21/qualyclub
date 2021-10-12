import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/service/mail.service';
import { MessagesService } from 'src/app/service/messages.service';
import { ScriptService } from 'src/app/service/script.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private scriptService: ScriptService,
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private mailService: MailService
  ) { }

  ngOnInit(): void {
    //this.scriptService.loadExternalScript('./assets/js/script.js').then(() => { }).catch(() => { });
    this.formInit();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      name: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      email: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      phone: [{ value: '', disabled: false }, Validators.compose([Validators.required])],
      subject: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      message: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(500)])],
    });
  }

  public send(form: any) {
    let object = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    };

    console.log(form)

    this.mailService.sendContact(form)
      .subscribe(
        response => {
          this.messagesService.showSuccess('Email enviado com sucesso!');
          this.formInit();
          console.log(object)
        },
        error => {
          this.messagesService.showError(error.message);
          console.log(error);
        }
      );

  }

}
