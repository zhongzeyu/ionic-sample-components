import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab23Page } from './tab23.page';

describe('Tab23Page', () => {
  let component: Tab23Page;
  let fixture: ComponentFixture<Tab23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
