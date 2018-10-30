import Krippendorff from './krippendorff.js';

window.kAlphaFromJson = function kAlphaFromJson(data, dataType) {
  let kripCal = new Krippendorff();
  kripCal.setJsonData(data, dataType);
  kripCal.calculate();
  return kripCal._KrAlpha;
};

window.kAlphaFromArray = function kAlphaFromArray(data, dataType) {
  let kripCal = new Krippendorff();
  kripCal.setArrayData(data, dataType);
  kripCal.calculate();
  return kripCal._KrAlpha;
};
