import { Config } from "@ngxtw/core";
import { Provider } from "@angular/core";
import { DialogConfig, provideDialogConfig } from "./dialog";

/**
 * @ngxtw Overlays configuration interface.
 */
export interface OverlaysConfig extends Config {
  dialog?: DialogConfig;
}

/**
 * Provides the Overlays configuration tokens.
 */
export function provideOverlaysConfig(customization?: OverlaysConfig): Provider[] {
  return [
    provideDialogConfig(customization?.dialog)
  ]
}
