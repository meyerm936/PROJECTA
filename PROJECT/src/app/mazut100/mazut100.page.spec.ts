import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mazut100Page } from './mazut100.page';

describe('Mazut100Page', () => {
  let component: Mazut100Page;
  let fixture: ComponentFixture<Mazut100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mazut100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mazut100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
