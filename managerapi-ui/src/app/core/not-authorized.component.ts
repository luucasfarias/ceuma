import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container">
      <div class="ui-g-12">
        <a routerLink="/home" class="back">Voltar</a>
      </div>

      <h1 class="text-center">Acesso negado!</h1>
    </div>
  `,
  styles: []
})
export class NotAuthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
