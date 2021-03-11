import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaseoilsPage } from './baseoils.page';

describe('BaseoilsPage', () => {
  let component: BaseoilsPage;
  let fixture: ComponentFixture<BaseoilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseoilsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseoilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
