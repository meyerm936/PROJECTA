import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GasolinePage } from './gasoline.page';

describe('GasolinePage', () => {
  let component: GasolinePage;
  let fixture: ComponentFixture<GasolinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasolinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GasolinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
