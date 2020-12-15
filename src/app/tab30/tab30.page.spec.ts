import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab30Page } from './tab30.page';

describe('Tab30Page', () => {
  let component: Tab30Page;
  let fixture: ComponentFixture<Tab30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab30Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
