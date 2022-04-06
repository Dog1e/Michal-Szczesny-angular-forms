import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  data = new FormGroup({
    imie: new FormControl('', Validators.required),
    nazwisko: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    email: new FormControl('', Validators.required),
    telefon_s: new FormControl('', Validators.required),
    kierunkowy: new FormControl('', Validators.required),
    wewn: new FormControl('', Validators.required),
    telefon_k: new FormControl('', [
      Validators.minLength(9),
      Validators.required,
    ]),
    odbiorca: new FormControl('', Validators.required),
  });

  onSubmit() {
    alert(
      'Imie: ' +
        this.data.get('imie').value +
        '\nNazwisko: ' +
        this.data.get('nazwisko').value +
        '\nEmail: ' +
        this.data.get('email').value +
        '\nTelefon stacjonarny: ' +
        ' +' +
        this.data.get('kierunkowy').value +
        ' ' +
        this.data.get('telefon_s').value +
        ' ' +
        this.data.get('wewn').value +
        '\nTelefon komórkowy: ' +
        this.data.get('telefon_k').value +
        '\nOdbiorca: ' +
        this.data.get('odbiorca').value
    );
  }
}
