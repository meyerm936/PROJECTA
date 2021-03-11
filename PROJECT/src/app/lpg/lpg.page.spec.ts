import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LpgPage } from './lpg.page';

describe('LpgPage', () => {
  let component: LpgPage;
  let fixture: ComponentFixture<LpgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LpgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
