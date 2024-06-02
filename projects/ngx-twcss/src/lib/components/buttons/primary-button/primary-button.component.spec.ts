import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryButton } from './primary-button.component';
import { PrimaryButtonConfig } from './primary-button.config';
import { toClassName } from '../../../common/helpers/object.helper';

describe('PrimaryButton', () => {
  let component: PrimaryButton;
  let fixture: ComponentFixture<PrimaryButton>;
  let config = toClassName(PrimaryButtonConfig);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PrimaryButton);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'addClass');
    spyOn(component, 'ngOnInit');

    component.ngOnInit();
    component.addClass(config);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should set size', () => {
    expect(component.size).toBeDefined();
    component.size = 'sm';
    expect(component.size).toBe('sm');
    component.size = 'md';
    expect(component.size).toBe('md');
    component.size = 'lg';
    expect(component.size).toBe('lg');
  });


  it('should set config', () => {
    expect(component.addClass).toHaveBeenCalled();
    expect(component.style).toContain(config);
  });
});
