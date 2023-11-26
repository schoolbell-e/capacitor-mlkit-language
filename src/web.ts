import { WebPlugin } from '@capacitor/core';

import type { MLKitLanguagePlugin } from './definitions';

export class MLKitLanguageWeb extends WebPlugin implements MLKitLanguagePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
