import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageEnum } from 'src/app/enum/message.enum';
import { MailService } from 'src/app/service/mail.service';
import { MessagesService } from 'src/app/service/messages.service';
import { ScriptService } from 'src/app/service/script.service';
import { FormValidation } from 'src/app/validation/fomr.validation';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  validatorRequired: MessageEnum = MessageEnum.validatorRequired;
  validatorEmailInvalid: MessageEnum = MessageEnum.validatorEmailInvalid;
  formValidation: FormValidation = new FormValidation();

  constructor(
    private scriptService: ScriptService,
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private mailService: MailService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  get controler() { return this.form.controls; }

  private formInit() {
    this.form = this.formBuilder.group({
      name: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      email: [{ value: '', disabled: false }, Validators.compose([Validators.required])],
      phone: [{ value: '', disabled: false }, Validators.compose([Validators.required])],
      subject: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      message: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
    });
  }

  public send(form: any, event) {

    if (event.keyCode != 13) {

      this.submitted = true;

      if (this.validationForm() == false) {
        return null;
      }

      this.mailService.sendContact(form)
        .subscribe(
          response => {
            this.messagesService.showSuccess('Email enviado com sucesso!');
            this.formInit();
          },
          error => {
            if (error.status == 200) {
              this.messagesService.showSuccess('Email enviado com sucesso!');
              this.formInit();
            } else {
              this.messagesService.showError(error.message);
              console.log(error.error);
            }
          }
        );

    }

  }


  private validationForm(): boolean {
    return this.formValidation.validationForm(this.form, this.messagesService);
  }

}
