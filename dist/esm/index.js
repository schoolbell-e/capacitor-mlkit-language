import { registerPlugin } from '@capacitor/core';
const MLKitLanguage = registerPlugin('MLKitLanguage', {
    web: () => import('./web').then(m => new m.MLKitLanguageWeb()),
});
export * from './definitions';
export { MLKitLanguage };
//# sourceMappingURL=index.js.map