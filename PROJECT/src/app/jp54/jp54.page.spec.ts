import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jp54Page } from './jp54.page';

describe('Jp54Page', () => {
  let component: Jp54Page;
  let fixture: ComponentFixture<Jp54Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jp54Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jp54Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
