import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab20Page } from './tab20.page';

describe('Tab20Page', () => {
  let component: Tab20Page;
  let fixture: ComponentFixture<Tab20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab20Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
