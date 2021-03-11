import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dieselen590Page } from './dieselen590.page';

describe('Dieselen590Page', () => {
  let component: Dieselen590Page;
  let fixture: ComponentFixture<Dieselen590Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dieselen590Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dieselen590Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
