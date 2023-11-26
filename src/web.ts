import { WebPlugin } from '@capacitor/core';

import type { MLKitLanguagePlugin } from './definitions';

export class MLKitLanguageWeb extends WebPlugin implements MLKitLanguagePlugin {
  async identifyLanguage(_: { text: string }): Promise<{ languageCode: string }> {
    throw new Error('identifyLanguage() not implemented for web');
  }
}
