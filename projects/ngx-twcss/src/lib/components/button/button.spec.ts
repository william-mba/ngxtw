import { Button } from './button';
import { ButtonConfig, ButtonSize } from './button.config';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ElementRef } from '@angular/core';

describe('Button', () => {
  const component = new Button(new ElementRef('tw-button'));
  const primaryStyle = toClassName(ButtonConfig.primary);
  const secondaryStyle = toClassName(ButtonConfig.secondary);
  const tonalStyle = toClassName(ButtonConfig.tonal);
  const sizeVariants = ['sm', 'md', 'lg'] as ButtonSize[];

  beforeEach(async () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should init config when style is undefined', () => {
    spyOn(component, 'initConfig');
    component.initConfig();
    expect(component.initConfig).toHaveBeenCalled();
    // Primary config should have been set as button is primary by default
    expect(component.style).toContain(primaryStyle);
  });

  it('should set variant', () => {
    expect(component.variant).toBeDefined()
    component.variant = 'primary';
    expect(component.variant).toBe('primary');
    component.variant = 'secondary';
    expect(component.variant).toBe('secondary');
    component.variant = 'tonal';
    expect(component.variant).toBe('tonal');
    component.variant = 'text';
    expect(component.variant).toBe('text');
  });

  it('should set style', () => {
    expect(component.style).toBeDefined();

    component.style = resolveClassName(primaryStyle, component.className);
    expect(component.style).toEqual(primaryStyle);

    component.style = resolveClassName(secondaryStyle, component.className);
    expect(component.style).toEqual(secondaryStyle);

    component.style = resolveClassName(tonalStyle, component.className);
    expect(component.style).toEqual(tonalStyle);
  });

  it('should set custom style', () => {
    let customStyle = 'text-red-500 bg-blue-500';
    component.className = customStyle;
    component.initConfig();
    expect(component.style).toContain(customStyle);

    customStyle = 'text- bg-';
    component.className = customStyle;
    component.initConfig();
    expect(component.style).not.toContain(customStyle);
  });

  it('should set size', () => {
    expect(component.size).toBeDefined();
    component.size = sizeVariants[0];
    expect(component.size).toBe('sm');
    component.size = sizeVariants[1];
    expect(component.size).toBe('md');
    component.size = sizeVariants[2];
    expect(component.size).toBe('lg');
  });
});