import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab19Page } from './tab19.page';

describe('Tab19Page', () => {
  let component: Tab19Page;
  let fixture: ComponentFixture<Tab19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
