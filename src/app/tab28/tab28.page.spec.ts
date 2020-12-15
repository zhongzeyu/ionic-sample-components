import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab28Page } from './tab28.page';

describe('Tab28Page', () => {
  let component: Tab28Page;
  let fixture: ComponentFixture<Tab28Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab28Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
