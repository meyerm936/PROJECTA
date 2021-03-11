import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dieseld2Page } from './dieseld2.page';

describe('Dieseld2Page', () => {
  let component: Dieseld2Page;
  let fixture: ComponentFixture<Dieseld2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dieseld2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dieseld2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
