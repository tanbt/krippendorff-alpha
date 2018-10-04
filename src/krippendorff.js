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
    //this._matrix = math.matrix(filteredData);
    this._ratingValues = this._getUniqueRatingValues(filteredData);
    this._agreementTable = this._getAgreementTable(filteredData, this._ratingValues);
    this._weightMatrix = this._getWeightMatrix(this._ratingValues, this._dataType);
    this._weightAgreementMatrix = this._getWeightedAgreementMatrix(this._agreementTable, this._weightMatrix);
  }

  _getWeightedAgreementMatrix(agreementTable, weightMatrix) {
    return math.multiply(agreementTable, weightMatrix);
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
   * Calculate weight matrix based on data type
   *
   * @param {*} ratingValues unique values of ratings
   * @param Integer dataType Data type from DATATYPE
   */
  _getWeightMatrix(ratingValues, dataType) {
    let result = [];
    let q = ratingValues.length;
    let h, k;
    for(h = 0; h < q; h++) {
      let row = [];
      for(k = 0; k < q; k++) {
        row.push(this._calculateWeight(ratingValues, h, k, dataType));
      }
      result.push(row);
    }
    return math.matrix(result);
  }

  _calculateWeight(ratingValues, h, k, dataType) {
    switch (dataType) {
      case DATATYPE['interval']:
        return 1; // todo: calculate later
      case DATATYPE['ordinal']:
        return 1; // todo: calculate later
      case DATATYPE['interval']:
        return 1; // todo: calculate later
      default:  //categorical
        return (ratingValues[h] === ratingValues[k]) ? 1 : 0;
    }
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
