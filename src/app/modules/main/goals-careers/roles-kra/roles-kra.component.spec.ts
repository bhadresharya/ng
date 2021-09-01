import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesKraComponent } from './roles-kra.component';

describe('RolesKraComponent', () => {
  let component: RolesKraComponent;
  let fixture: ComponentFixture<RolesKraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesKraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesKraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
