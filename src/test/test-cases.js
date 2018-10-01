import Krippendorff from '../krippendorff.js';
import * as math from 'mathjs';

var expect = require('expect.js');

describe('Krippendorff functionalities', function() {

  describe('Loading data', function() {
    it('should be constructed with new data', function() {
        const data = [1,2,3];
        let kripCal = new Krippendorff(data);
        expect(kripCal.matrix._data).to.have.length(3);
    });
  });

});