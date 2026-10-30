let self = {
    array_unique(arr) {
        return [...new Set(arr)];
    },

    decode_json(string) {
        if ( typeof string == 'string') {
            return JSON.parse(string);
        }

        return string;
    },

    encode_json(array, null_if_empty = true, return_empty_array = true) {
        if ( typeof array == 'string' ) {
            return array;
        }

        if ( array === null ) {
            return null_if_empty ? null : JSON.stringify(return_empty_array ? [] : {});
        }
        else if ( Array.isArray(array) && !array.length ) {
            return null_if_empty ? null : JSON.stringify([]);
        }
        else if ( array == '{}' ) {
            return null_if_empty ? null : JSON.stringify({});
        }

        return JSON.stringify(array, (key, value) => (typeof value === "string" && value !== '' && !isNaN(value) ? Number(value) : value));
    },
};

export default self;
