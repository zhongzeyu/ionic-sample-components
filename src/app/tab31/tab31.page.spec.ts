import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab31Page } from './tab31.page';

describe('Tab31Page', () => {
  let component: Tab31Page;
  let fixture: ComponentFixture<Tab31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab31Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
