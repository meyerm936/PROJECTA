import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LngPage } from './lng.page';

describe('LngPage', () => {
  let component: LngPage;
  let fixture: ComponentFixture<LngPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LngPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
