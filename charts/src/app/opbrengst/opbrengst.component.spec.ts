import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpbrengstComponent } from './opbrengst.component';

describe('OpbrengstComponent', () => {
  let component: OpbrengstComponent;
  let fixture: ComponentFixture<OpbrengstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpbrengstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpbrengstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
