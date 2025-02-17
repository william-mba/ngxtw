import { ChangeDetectionStrategy, Component, model, ViewEncapsulation } from '@angular/core';
import { SizeOption, BadgeBase, Badge, classlist } from '@tailwind-ng/core';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  host: {
    '[class]': 'classList.value()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BadgeBase, useExisting: BadgeComponent }]
})
export class BadgeComponent extends BadgeBase implements Badge {
  size = model<SizeOption>('md');

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set({ ...this.config.base, ...this.config[this.size()] })
  }
}
