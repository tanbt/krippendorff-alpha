export default class Krippendorff {
    constructor() {
        this._data = "Example data";
    }

    get data() {
        return this._data;
    }

    set data(input) {
        this._data = input;
    }
}
