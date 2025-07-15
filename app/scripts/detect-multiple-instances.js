import browser from 'webextension-polyfill';
import { PLATFORM_CHROME, PLATFORM_FIREFOX, CHROME_BUILD_IDS, FIREFOX_BUILD_IDS } from '../../shared/constants/app';
import { getPlatform } from './lib/util';

const MESSAGE_TEXT = 'isRunning';

const onMessageReceived = (message) => message === MESSAGE_TEXT && console.warn('Warning! You have multiple instances of hvoruApp running!');

export const checkForMultipleVersionsRunning = async () => {
  const platform = getPlatform();
  if (platform !== PLATFORM_CHROME && platform !== PLATFORM_FIREFOX) return;
  const buildIds = platform === PLATFORM_CHROME ? CHROME_BUILD_IDS : FIREFOX_BUILD_IDS;
  const thisBuild = browser.runtime.id;
  for (const id of buildIds) {
    if (id !== thisBuild) {
      try { await browser.runtime.sendMessage(id, MESSAGE_TEXT); } catch (_) {}
    }
  }
};
