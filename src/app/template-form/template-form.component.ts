import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  user = {
    imie: '',
    nazwisko: '',
    email: '',
    telefon_s: '',
    kierunkowy: '',
    wewn: '',
    telefon_k: '',
    odbiorca: '',
  };

  onSubmit() {
    if (this.user.nazwisko.length < 4) {
      alert('Podałeś niepoprawne nazwisko');
    } else if (this.user.telefon_k.length < 9) {
      alert('Podałeś niepoprawny numer telefonu komórkowego');
    } else {
      alert(
        'Imie: ' +
          this.user.imie +
          '\nNazwisko: ' +
          this.user.nazwisko +
          '\nEmail: ' +
          this.user.email +
          '\nTelefon stacjonarny: ' +
          '+' +
          this.user.kierunkowy +
          ' ' +
          this.user.telefon_s +
          ' ' +
          this.user.wewn +
          '\nTelefon komórkowy: ' +
          this.user.telefon_k +
          '\nOdbiorca: ' +
          this.user.odbiorca
      );
    }
  }

  constructor() {}

  ngOnInit() {}
}
