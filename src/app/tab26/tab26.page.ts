import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab26',
  templateUrl: './tab26.page.html',
  styleUrls: ['./tab26.page.scss'],
})
export class Tab26Page implements OnInit {
  items = [{name:"Bogota",show:true},
  {name:"Buenos Aires",show:true},
  {name:"Cairo",show:true},
  {name:"Dhaka",show:true},
  {name:"Edinburgh",show:true},
  {name:"Geneva",show:true},
  {name:"Genoa",show:true},
  {name:"Glasgow",show:true},
  {name:"Hanoi",show:true},
  {name:"Hong Kong",show:true},
  {name:"Islamabad",show:true},
  {name:"Istanbul",show:true},
  {name:"Jakarta",show:true},
  {name:"Kiel",show:true},
  {name:"Kyoto",show:true},
  {name:"Le Havre",show:true},
  {name:"Lebanon",show:true},
  {name:"Lhasa",show:true},
  {name:"Lima",show:true},
  {name:"London",show:true},
  {name:"Los Angeles",show:true},
  {name:"Madrid",show:true},
  {name:"Manila",show:true},
  {name:"New York",show:true},
  {name:"Olympia",show:true},
  {name:"Oslo",show:true},
  {name:"Panama City",show:true},
  {name:"Peking",show:true},
  {name:"Philadelphia",show:true},
  {name:"San Francisco",show:true},
  {name:"Seoul",show:true},
  {name:"Taipeh",show:true},
  {name:"Tel Aviv",show:true},
  {name:"Tokio",show:true},
  {name:"Uelzen",show:true},
  {name:"Washington",show:true},
  ];
  constructor() { }

  ngOnInit() {
  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      this.items.forEach(item => {
        const shouldShow = item.name.toLowerCase().indexOf(query) > -1;
        item.show = shouldShow ? true : false;
      });
    });
  }
}
