import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab18Page } from './tab18.page';

describe('Tab18Page', () => {
  let component: Tab18Page;
  let fixture: ComponentFixture<Tab18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
