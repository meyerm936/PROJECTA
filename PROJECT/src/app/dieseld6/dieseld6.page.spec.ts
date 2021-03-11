import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dieseld6Page } from './dieseld6.page';

describe('Dieseld6Page', () => {
  let component: Dieseld6Page;
  let fixture: ComponentFixture<Dieseld6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dieseld6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dieseld6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
