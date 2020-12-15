import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab23',
  templateUrl: './tab23.page.html',
  styleUrls: ['./tab23.page.scss'],
})
export class Tab23Page implements OnInit {
  names = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle'
  ];
  lists = [];
  constructor() { }

  ngOnInit() {
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.prependMessages(5,true);
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  prependMessages(numMessages, unread) {
    let iCnt = 0;
    for (let i = 0; i < this.names.length; i++) {
      let name = this.names[i];
      //check if name exists
      let nameExists = false;
      for(let j = 0; j < this.lists.length; j++){
        let listName = this.lists[j].name;
        if(listName == name){
          nameExists = true;
          break;
        }
      }
      if(nameExists){
        continue;
      }
      iCnt++;
      if(iCnt == numMessages){
        return;
      }

      this.lists.push({"name":name});
    }
  }
  

}
