import { FormGroup } from "@angular/forms";
import { MessagesService } from "../service/messages.service";


export class FormValidation {

  constructor() { }

  public validationForm(form: FormGroup, messagesService: MessagesService): boolean {
    console.log(form)
    if (form.invalid) {
      messagesService.showError('Existem campos sem preenchimento.');
      return false;
    }
  }

}



