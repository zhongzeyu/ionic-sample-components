import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab24',
  templateUrl: './tab24.page.html',
  styleUrls: ['./tab24.page.scss'],
})
export class Tab24Page implements OnInit {
  disable=false;
  constructor() { }

  ngOnInit() {
  }
  toggleReorder(){
    this.disable = ! this.disable;
  }
}
