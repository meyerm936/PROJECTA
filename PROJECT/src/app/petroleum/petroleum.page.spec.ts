import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetroleumPage } from './petroleum.page';

describe('PetroleumPage', () => {
  let component: PetroleumPage;
  let fixture: ComponentFixture<PetroleumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetroleumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetroleumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
