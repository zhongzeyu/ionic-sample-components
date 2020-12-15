import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab14Page } from './tab14.page';

describe('Tab14Page', () => {
  let component: Tab14Page;
  let fixture: ComponentFixture<Tab14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
