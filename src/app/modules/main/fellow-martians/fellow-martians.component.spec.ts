import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowMartiansComponent } from './fellow-martians.component';

describe('FellowMartiansComponent', () => {
  let component: FellowMartiansComponent;
  let fixture: ComponentFixture<FellowMartiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowMartiansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowMartiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
