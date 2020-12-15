import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab27',
  templateUrl: './tab27.page.html',
  styleUrls: ['./tab27.page.scss'],
})
export class Tab27Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
