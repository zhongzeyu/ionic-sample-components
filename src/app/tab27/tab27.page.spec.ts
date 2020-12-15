import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab27Page } from './tab27.page';

describe('Tab27Page', () => {
  let component: Tab27Page;
  let fixture: ComponentFixture<Tab27Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab27Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
