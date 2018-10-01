import Papa from 'papaparse';
import Krippendorff from '../../src/krippendorff.js';

window.calculate = function calculate() {
    var file = document.getElementById('csvInput').files[0];
    if (!file) {
        out('Please select a file');
        return;
    }

    var promise = Promise.resolve();
    promise.then(() => getFileContent(file))
        .then((result) => {
            const content = result.target.result;
            let arrData = parseCSVToArray(content).data;
            let kripCal = new Krippendorff(arrData);
            out(JSON.stringify(kripCal.matrix));
        });
}

function parseCSVToArray(csvString) {
    const config = {
        delimiter: "",	// auto-detect
        newline: "",	// auto-detect
        quoteChar: '"',
        escapeChar: '"',
        header: false,
        trimHeaders: false,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
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
        transform: undefined
    }
    return Papa.parse(csvString, config);
}

function getFileContent(fileDOM, output) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = resolve;
        reader.readAsText(fileDOM);
    });
}

function out(text) {
    document.getElementById('output').innerHTML = text;
}