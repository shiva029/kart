import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempaddressComponent } from './tempaddress.component';

describe('TempaddressComponent', () => {
  let component: TempaddressComponent;
  let fixture: ComponentFixture<TempaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
