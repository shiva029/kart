import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobliesComponent } from './moblies.component';

describe('MobliesComponent', () => {
  let component: MobliesComponent;
  let fixture: ComponentFixture<MobliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
