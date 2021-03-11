import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlacklistedPage } from './blacklisted.page';

describe('BlacklistedPage', () => {
  let component: BlacklistedPage;
  let fixture: ComponentFixture<BlacklistedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlacklistedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
