import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab17Page } from './tab17.page';

describe('Tab17Page', () => {
  let component: Tab17Page;
  let fixture: ComponentFixture<Tab17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab17Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
