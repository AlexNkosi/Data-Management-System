import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprogrammeComponent } from './infoprogramme.component';

describe('InfoprogrammeComponent', () => {
  let component: InfoprogrammeComponent;
  let fixture: ComponentFixture<InfoprogrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoprogrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
