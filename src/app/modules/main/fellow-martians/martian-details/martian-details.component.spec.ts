import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartianDetailsComponent } from './martian-details.component';

describe('MartianDetailsComponent', () => {
  let component: MartianDetailsComponent;
  let fixture: ComponentFixture<MartianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartianDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
