import { afterNextRender, Component } from '@angular/core';
import { AVATAR_DEMO_SAMPLE } from './avatar-demo.sample';

@Component({
  selector: 'app-avatar-demo',
  templateUrl: './avatar-demo.component.html',
})
export class AvatarDemoComponent {
  sample = AVATAR_DEMO_SAMPLE;
  constructor() {
    afterNextRender({ write: () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 500);
    } }, )
  }
}
