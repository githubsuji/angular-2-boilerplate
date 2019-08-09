import { ExtraOptions } from '@angular/router';

export const config: ExtraOptions = {
    useHash: true,
    onSameUrlNavigation: 'reload',
    enableTracing: true // <-- debugging purposes only
  };
