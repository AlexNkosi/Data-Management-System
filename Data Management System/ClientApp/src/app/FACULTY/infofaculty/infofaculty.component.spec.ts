import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfofacultyComponent } from './infofaculty.component';

describe('InfofacultyComponent', () => {
  let component: InfofacultyComponent;
  let fixture: ComponentFixture<InfofacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfofacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfofacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
