import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenStaffHomeComponent } from './kitchen-staff-home.component';

describe('KitchenStaffHomeComponent', () => {
  let component: KitchenStaffHomeComponent;
  let fixture: ComponentFixture<KitchenStaffHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenStaffHomeComponent]
    });
    fixture = TestBed.createComponent(KitchenStaffHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
