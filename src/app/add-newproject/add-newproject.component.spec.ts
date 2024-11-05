import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewprojectComponent } from './add-newproject.component';

describe('AddNewprojectComponent', () => {
  let component: AddNewprojectComponent;
  let fixture: ComponentFixture<AddNewprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
