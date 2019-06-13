import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfis = []

  constructor() {
    this.perfis = [
      {
        'avatar': 'http://www.diarioonline.com.br/app/painel/modulo-noticia/img/imagensdb/original/destaque-598642-gabriel.jpeg',
        'nome': 'Gabriel Diniz',
        'idade': 28,
        'likes': 0
      },

      {
        'avatar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Gabriel_Jesus_850_1688.jpg/250px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Gabriel_Jesus_850_1688.jpg',
        'nome': 'Gabriel Jesus',
        'idade': 25,
        'likes': 0
      }
    ]
  }

}
