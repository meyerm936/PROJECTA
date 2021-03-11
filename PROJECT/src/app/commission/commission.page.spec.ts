import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommissionPage } from './commission.page';

describe('CommissionPage', () => {
  let component: CommissionPage;
  let fixture: ComponentFixture<CommissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
