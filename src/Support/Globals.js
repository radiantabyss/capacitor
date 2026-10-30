import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

export default async function() {
    let PLATFORM = Capacitor.getPlatform();
    let IS_NATIVE = Capacitor.isNativePlatform();

    //App.getInfo is not implemented on web
    let APP_VERSION = IS_NATIVE ? (await App.getInfo()).version : null;

    return {
        PLATFORM,
        IS_NATIVE,
        APP_VERSION,
    }
}
