import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UreaPage } from './urea.page';

describe('UreaPage', () => {
  let component: UreaPage;
  let fixture: ComponentFixture<UreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
