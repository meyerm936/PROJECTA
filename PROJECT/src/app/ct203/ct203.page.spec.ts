import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CT203Page } from './ct203.page';

describe('CT203Page', () => {
  let component: CT203Page;
  let fixture: ComponentFixture<CT203Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CT203Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CT203Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
