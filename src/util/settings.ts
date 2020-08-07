import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

class SettingsService {
  setScale(value: string): Promise<void> {}

  async getScale(): Promise<string> {}
}

export const settings = new SettingsService();
