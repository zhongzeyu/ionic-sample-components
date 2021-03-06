import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss'],
})
export class Tab9Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getContent() {
    return document.querySelector('ion-content');
  }
  scrollToBottom() {
    this.getContent().scrollToBottom(500);
  }

  scrollToTop() {
    this.getContent().scrollToTop(500);
  }

}
