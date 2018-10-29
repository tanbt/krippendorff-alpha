import Krippendorff from '../src/krippendorff.js';
import * as math from 'mathjs';

var expect = require('expect.js');

describe('Krippendorff functionalities', function () {

  describe('Get a result', function () {

    const exampleData = [
      ["1", "2", "#", "3", "4"],
      ["2", "2", "3", "2", "#"],
      ["1", "1", "1", "2", "2"],
      ["4", "4", "3", "4", "2"],
      ["3", "3", "4", "#", "3"],
      ["2", "#", "1", "1", "#"],
      ["3", "3", "3", "4", "#"],
      ["4", "3", "4", "3", "4"],
      ["#", "#", "#", "#", "#"],
      ["#", "3", "#", "#", "#"]];

    it('should use categorical as the default data type', function () {
      let kripCal = new Krippendorff();
      kripCal.setArrayData(exampleData);
      kripCal.calculate();
      expect(kripCal._KrAlpha).equal(0.16920374707259953);
    });

    it('should return a correct categorical K-alpha', function () {
      const dataType = 'categorical';
      let kripCal = new Krippendorff();
      kripCal.setArrayData(exampleData, dataType);
      kripCal.calculate();
      expect(kripCal._KrAlpha).equal(0.16920374707259953);
    });
    it('should return a correct ordinal K-alpha', function () {
      const dataType = 'ordinal';
      let kripCal = new Krippendorff();
      kripCal.setArrayData(exampleData, dataType);
      kripCal.calculate();
      expect(kripCal._KrAlpha).equal(0.48278520041109974);
    });
    it('should return a correct interval K-alpha', function () {
      const dataType = 'interval';
      let kripCal = new Krippendorff();
      kripCal.setArrayData(exampleData, dataType);
      kripCal.calculate();
      expect(kripCal._KrAlpha).equal(0.5420267085624503);
    });
    it('should return a correct ratio K-alpha', function () {
      const dataType = 'ratio';
      let kripCal = new Krippendorff();
      kripCal.setArrayData(exampleData, dataType);
      kripCal.calculate();
      expect(kripCal._KrAlpha).equal(0.5211447879977805);
    });
  });

});