import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcoMPage } from './fco-m.page';

describe('FcoMPage', () => {
  let component: FcoMPage;
  let fixture: ComponentFixture<FcoMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcoMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcoMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
