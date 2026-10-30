import { Preferences } from '@capacitor/preferences';

const self = {
    async get(key) {
        try {
            const { value } = await Preferences.get({ key });
            return JSON.parse(value);
        }
        catch (e) {
            return null;
        }
    },

    async set(key, value) {
        await Preferences.set({ key, value: JSON.stringify(value) });
    },

    async remove(key) {
        await Preferences.remove({ key });
    },

    async clear() {
        await Preferences.clear();
    },
};

export default self;
