export interface MLKitLanguagePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
