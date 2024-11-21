import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodserviceComponent } from './foodservice.component';

describe('FoodserviceComponent', () => {
  let component: FoodserviceComponent;
  let fixture: ComponentFixture<FoodserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
