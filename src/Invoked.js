let self = {
    data: {},

    all() {
        return JSON.parse(JSON.stringify(self.data));
    },

    get(key) {
        //JSON.parse(undefined) would throw on a key the payload doesn't have
        if ( !self.has(key) ) {
            return undefined;
        }

        return JSON.parse(JSON.stringify(self.data[key]));
    },

    has(key) {
        return key in self.data;
    },
};

export default self;
