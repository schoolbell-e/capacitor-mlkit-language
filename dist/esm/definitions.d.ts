export interface MLKitLanguagePlugin {
    identifyLanguage(options: {
        text: string;
    }): Promise<{
        languageCode: string;
    }>;
}
