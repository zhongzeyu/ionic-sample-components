import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab29Page } from './tab29.page';

describe('Tab29Page', () => {
  let component: Tab29Page;
  let fixture: ComponentFixture<Tab29Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab29Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
