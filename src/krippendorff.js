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
     * @param array data An javascript 2D array showing all ratings
     * @param string dataType The data type of rating
     */
  constructor(data, dataType) {
    this._dataType = DATATYPE[dataType];
    if (!dataType) {
      this._dataType = DATATYPE['categorical'];
    }
    let filteredData = this._removeEmptyItem(data);
    this._matrix = math.matrix(filteredData);
    this._values = this._getUniqueRatingValues(filteredData);
    this._agreementTable = this._getAgreementTable(filteredData, this._values);
  }

  _getAgreementTable(array2D, ratingValues) {
    let result = [];
    array2D.forEach(row => {
      let subject = [];
      ratingValues.forEach(val => {
        let count = row.filter(v => v === val).length;
        subject.push(count);
      });
      result.push(subject);
    });
    return result;
  }

  /**
   * Items (or Observers, which is arrays) less than 2 values are removed
   *
   * @param array array2D the 2D array
   */
  _removeEmptyItem(array2D) {
    return array2D.filter(arr => !this._isEmptyItem(arr));
  }

  _isEmptyItem(arr) {
    let result = arr.filter(val => !this._isEmptyItemValue(val));
    return result.length < 2;
  }

  _isEmptyItemValue(val) {
    return val === '' || val === '#';
  }

  /**
   * Get unique rating values to be columns of Agreement Table
   *
   * @param array array2D the 2D array
   */
  _getUniqueRatingValues(array2D) {
    let mergedArray = [];
    array2D.forEach(arr => mergedArray = mergedArray.concat(arr));
    let result = [... new Set(mergedArray)];
    result = result.filter(val => !this._isEmptyItemValue(val));
    return result.sort();
  }
}
