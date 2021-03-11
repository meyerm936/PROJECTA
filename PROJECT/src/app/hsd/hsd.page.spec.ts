import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HsdPage } from './hsd.page';

describe('HsdPage', () => {
  let component: HsdPage;
  let fixture: ComponentFixture<HsdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HsdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
