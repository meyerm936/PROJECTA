import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BitumenPage } from './bitumen.page';

describe('BitumenPage', () => {
  let component: BitumenPage;
  let fixture: ComponentFixture<BitumenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitumenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BitumenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
