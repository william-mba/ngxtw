import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Combobox, ICombobox } from './combobox.component';
import { provideButtonConfig } from '../../elements/button/button.config';
import { provideComboboxConfig } from './combobox.config';
import { provideDropdownConfig } from '../../elements/dropdown/dropdown.config';

describe('Combobox Component', () => {
  let component: ICombobox;
  let fixture: ComponentFixture<ICombobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Combobox],
      providers: [
        provideButtonConfig(),
        provideComboboxConfig(),
        provideDropdownConfig()]
    }).compileComponents();

    fixture = TestBed.createComponent(Combobox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
