import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab26Page } from './tab26.page';

describe('Tab26Page', () => {
  let component: Tab26Page;
  let fixture: ComponentFixture<Tab26Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab26Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
