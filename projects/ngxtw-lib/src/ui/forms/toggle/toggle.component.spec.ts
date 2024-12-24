import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from './toggle.component';
import { ToggleConfig } from './toggle.config';
import { ClassList } from '../../../config/classlist';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set isChecked', () => {
    component.isChecked = true;
    expect(component.isChecked).toBeTrue();
  });

  it('should toggle', () => {
    expect(component.isChecked).toBeFalse();
    component.toggle();
    expect(component.isChecked).toBeTrue();
  });

  it('should get config', () => {
    expect(component.config.get('Toggle').value).toEqual(ToggleConfig());
  });

  it('should set classlist', () => {
    expect(component.classList.value).toEqual(new ClassList().setFrom(ToggleConfig()).value);
  });
});
