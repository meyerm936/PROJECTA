import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetcokePage } from './petcoke.page';

describe('PetcokePage', () => {
  let component: PetcokePage;
  let fixture: ComponentFixture<PetcokePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetcokePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetcokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
