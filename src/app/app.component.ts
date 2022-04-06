import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
          ' Nazwisko: ' +
          this.user.nazwisko +
          ' Email: ' +
          this.user.email +
          ' Telefon stacjonarny: ' +
          '+' +
          this.user.kierunkowy +
          ' ' +
          this.user.telefon_s +
          ' ' +
          this.user.wewn +
          ' Telefon komórkowy: ' +
          this.user.telefon_k +
          ' Odbiorca: ' +
          this.user.odbiorca
      );
    }
  }
}
