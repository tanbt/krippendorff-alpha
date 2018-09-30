export default class Krippendorff {
    constructor(data) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    set data(input) {
        this._data = input;
    }
}
