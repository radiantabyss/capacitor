import Response from './Response.js';
import Invoked from './Invoked.js';
import Validator from './Validator.js';
import IPC from './IPC.js';

import Globals from './Support/Globals.js';
import Storage from './Support/Storage.js';
import Helpers from './Support/Helpers.js';

import Item from '@radiantabyss/support/src/Item.js';
import Items from '@radiantabyss/support/src/Items.js';
import Str from '@radiantabyss/support/src/Str.js';

window.RA = {};

export default async () => {
    window.Storage = Storage;
    window.Item = Item;
    window.Items = Items;
    window.pluck = Items.pluck;
    window.spread = Items.spread;
    window.keyBy = Items.keyBy;
    window.groupBy = Items.groupBy;
    window.Str = Str;

    //globals
    let globals = await Globals();
    for (let key in globals) {
        window[key] = globals[key];
    }

    //helpers
    for ( let key in Helpers ) {
        window[key] = Helpers[key];
    }

    window.Response = Response;
    window.Invoked = Invoked;
    window.Validator = Validator;
    window.IPC = IPC;
};
