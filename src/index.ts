import { registerPlugin } from '@capacitor/core';

import type { MLKitLanguagePlugin } from './definitions';

const MLKitLanguage = registerPlugin<MLKitLanguagePlugin>('MLKitLanguage', {
  web: () => import('./web').then(m => new m.MLKitLanguageWeb()),
});

export * from './definitions';
export { MLKitLanguage };
