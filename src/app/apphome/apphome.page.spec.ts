import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApphomePage } from './apphome.page';

describe('ApphomePage', () => {
  let component: ApphomePage;
  let fixture: ComponentFixture<ApphomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApphomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
