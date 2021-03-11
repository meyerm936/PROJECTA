import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Thank1Page } from './thank1.page';

describe('Thank1Page', () => {
  let component: Thank1Page;
  let fixture: ComponentFixture<Thank1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thank1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Thank1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
