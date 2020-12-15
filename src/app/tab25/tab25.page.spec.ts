import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab25Page } from './tab25.page';

describe('Tab25Page', () => {
  let component: Tab25Page;
  let fixture: ComponentFixture<Tab25Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab25Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
