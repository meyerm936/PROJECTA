import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudeoilPage } from './crudeoil.page';

describe('CrudeoilPage', () => {
  let component: CrudeoilPage;
  let fixture: ComponentFixture<CrudeoilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudeoilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudeoilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
