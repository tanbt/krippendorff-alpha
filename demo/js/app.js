import Papa from 'papaparse';
import Krippendorff from '../../src/krippendorff.js';

window.calculate = function calculate() {
  let dataType = document.getElementById('dataType').value;
  if (!dataType) {
    out('Please select a data type');
    return;
  }

  let json = document.getElementById('jsonInput').value;
  if (json) {
    let kripCal = new Krippendorff();
    kripCal.setJsonData(json, dataType);
    kripCal.calculate();
    out(kripCal._KrAlpha);
    return;
  }

  let file = document.getElementById('csvInput').files[0];
  if (!file) {
    out('Please select a file');
    return;
  }

  let promise = Promise.resolve();
  promise.then(() => getFileContent(file))
    .then((result) => {
      const content = result.target.result;
      let arrData = parseCSVToArray(content).data;
      let kripCal = new Krippendorff();
      kripCal.setArrayData(arrData, dataType);
      kripCal.calculate();
      out(kripCal._KrAlpha);
    });
};

function parseCSVToArray(csvString) {
  const config = {
    delimiter: '',	// auto-detect
    newline: '',	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    trimHeaders: false,
    dynamicTyping: false,
    preview: 0,
    encoding: '',
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    skipEmptyLines: true,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
  };
  return Papa.parse(csvString, config);
}

function getFileContent(fileDOM) {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.onload = resolve;
    reader.readAsText(fileDOM);
  });
}

function out(text) {
  document.getElementById('output').innerHTML = text;
}
