import { ExtraOptions } from '@angular/router';

export const config: ExtraOptions = {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    enableTracing: true // <-- debugging purposes only
  };
