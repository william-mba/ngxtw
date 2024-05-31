import { BaseButtonConfig } from "../button.config";

export const PrimaryButtonKey = 'PrimaryButton';

export interface PrimaryButtonConfig extends Partial<BaseButtonConfig> { };

export const PrimaryButtonConfig: PrimaryButtonConfig = {
  ...BaseButtonConfig,
  theme: {
    textColor: 'text-white',
    bgColor: 'bg-indigo-600',
    modifier: {
      hover: {
        bgOpacity: 'hover:bg-opacity-90'
      }
    }
  }
}