import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CC101Page } from './cc101.page';

describe('CC101Page', () => {
  let component: CC101Page;
  let fixture: ComponentFixture<CC101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CC101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CC101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
