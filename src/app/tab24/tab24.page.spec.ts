import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab24Page } from './tab24.page';

describe('Tab24Page', () => {
  let component: Tab24Page;
  let fixture: ComponentFixture<Tab24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab24Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
