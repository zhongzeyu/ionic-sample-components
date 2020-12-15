import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab11Page } from './tab11.page';

describe('Tab11Page', () => {
  let component: Tab11Page;
  let fixture: ComponentFixture<Tab11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
