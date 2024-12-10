import { ChangeDetectionStrategy, Component, computed, input, output, ViewEncapsulation } from '@angular/core';
import { ComboboxItem } from './combobox-item.interface';
import { Combobox } from '../combobox.interface';
import { BaseDirective } from '../../../../core/directives/element-base.directive';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  host: {
    '(click)': 'select()',
    '[attr.aria-selected]': 'isSelected || null',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxItemComponent extends BaseDirective implements ComboboxItem {
  get isSelected(): boolean {
    return this.combobox().has(this);
  }
  value = input.required<string>();
  combobox = input.required<Combobox>();
  selected = output<ComboboxItem>();
  private normalizedValue = computed(() => this.value().toLocaleLowerCase());
  private valueEqualsInputValue = () => this.normalizedValue() === this.combobox().control().value.toLocaleLowerCase();
  private valueIncludesInputValue = () => this.normalizedValue().includes(this.combobox().control().value.toLocaleLowerCase());

  protected override onInit(): void {
    this._config.get('ComboboxItem').subscribe(config => {
      this.classList.setFrom(config);
    });

    // Select the item if it is the default value.
    if (this.valueEqualsInputValue()) this.select();

    // Select the item if the value changed matchs the item value.
    this.combobox().valueChanged.subscribe(value => {
      if (this.combobox().isMultiselect()) {
        const some = value.split(this.combobox().valueSeparator()).
          some(x => this.normalizedValue() === x.trim().toLocaleLowerCase());
        if (!this.isSelected && some) this.select();
      } else {
        if (!this.isSelected && this.valueEqualsInputValue()) this.select();
      }
    });

    // Select the item if the user presses Enter.
    this.combobox().keyPressed.subscribe(event => {
      if (event.key === 'Enter' && !this.isSelected) {
        if (this.combobox().isMultiselect()) {
          const some = this.combobox().control().value.toLocaleLowerCase().split(this.combobox().valueSeparator()).
            some(x => this.normalizedValue().includes(x.trim()));
          if (some) this.select();
        } else {
          if (this.valueIncludesInputValue()) this.select();
        }
      }
    });

    this.combobox().opened.subscribe(() => {
      if (this.isSelected) this.scrollIntoView();
    });
  }

  select(): void {
    this.combobox().select(this);
  }

  scrollIntoView(): void {
    this.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
  }
}