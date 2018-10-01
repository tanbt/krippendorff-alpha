import * as math from 'mathjs';

/**
 * Calculate Krippendorff's Alpha of a matrix of rating table
 */
export default class Krippendorff {

  /**
     * Init the calculator
     *
     * @param {*} data An javascript 2D array
     */
  constructor(data) {
    this._matrix = math.matrix(data);
  }

  get matrix() {
    return this._matrix;
  }

  set matrix(input) {
    this._matrix = input;
  }
}
