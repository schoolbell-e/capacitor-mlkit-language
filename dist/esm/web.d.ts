import { WebPlugin } from '@capacitor/core';
import type { MLKitLanguagePlugin } from './definitions';
export declare class MLKitLanguageWeb extends WebPlugin implements MLKitLanguagePlugin {
    identifyLanguage(_: {
        text: string;
    }): Promise<{
        languageCode: string;
    }>;
}
