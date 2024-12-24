import { FullyOptional } from '../../../../core/types/fully-optional.type';
import { Provider } from "@angular/core";
import { InjectionTokenFactory } from "../../../../core/shared/injection-token.factory";
import { ConfigType, Modifier } from "../../../../core/types/config.type";
import { mergeConfig } from "../../../../config/config.helper";

export interface ComboboxItemConfig extends ConfigType {
  ariaSelected: Modifier<'aria-selected'>;
};

const DefaultConfig = (): ComboboxItemConfig => {
  return {
    height: 'h-fit',
    padding: {
      x: 'px-4',
      y: 'py-2'
    },
    cursor: 'cursor-pointer',
    position: 'relative',
    display: 'flex',
    gap: 'gap-1',
    alignItems: 'items-center',
    hover: {
      textColor: 'hover:text-white',
      bgColor: 'hover:bg-blue-600',
      fontWeight: 'hover:font-bold'
    },
    ariaSelected: {
      textColor: 'aria-selected:text-white',
      bgColor: 'aria-selected:bg-blue-600',
      fontWeight: 'aria-selected:font-bold'
    }
  }
}

export const ComboboxItemConfig = (customization?: FullyOptional<ComboboxItemConfig>): ComboboxItemConfig => {
  return !customization ? DefaultConfig() : mergeConfig({ target: DefaultConfig(), source: [customization] });
}

export const COMBOBOX_ITEM_CONFIG = InjectionTokenFactory.create(ComboboxItemConfig(), 'COMBOBOX_ITEM_CONFIG');

export function provideComboboxItemConfig(customization?: FullyOptional<ComboboxItemConfig>): Provider {
  return {
    provide: COMBOBOX_ITEM_CONFIG,
    useValue: ComboboxItemConfig(customization)
  }
}
