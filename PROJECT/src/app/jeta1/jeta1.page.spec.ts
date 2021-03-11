import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jeta1Page } from './jeta1.page';

describe('Jeta1Page', () => {
  let component: Jeta1Page;
  let fixture: ComponentFixture<Jeta1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jeta1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jeta1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
