import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab22Page } from './tab22.page';

describe('Tab22Page', () => {
  let component: Tab22Page;
  let fixture: ComponentFixture<Tab22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab22Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
