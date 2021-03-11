import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcocifPage } from './fcocif.page';

describe('FcocifPage', () => {
  let component: FcocifPage;
  let fixture: ComponentFixture<FcocifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcocifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcocifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
