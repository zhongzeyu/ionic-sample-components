import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab15Page } from './tab15.page';

describe('Tab15Page', () => {
  let component: Tab15Page;
  let fixture: ComponentFixture<Tab15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
