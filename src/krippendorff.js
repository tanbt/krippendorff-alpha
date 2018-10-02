import * as math from 'mathjs';

const DATATYPE = {
  categorical: 1,
  ordinal: 2,
  interval: 3,
  ratio: 4,
};
Object.freeze(DATATYPE);

/**
 * Calculate Krippendorff's Alpha of a matrix of rating table
 */
export default class Krippendorff {
  /**
     * Init the calculator
     *
     * @param array data An javascript 2D array
     * @param string dataType The data type of rating
     */
  constructor(data, dataType) {
    this._dataType = DATATYPE[dataType];
    if (!dataType) {
      this._dataType = DATATYPE['categorical'];
    }
    this._matrix = math.matrix(data);
  }

}
