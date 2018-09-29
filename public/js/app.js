import Krippendorff from './krippendorff.js';
//import * as math from '../lib/math.min.js'
//import '../lib/papaparse.js';

//var c = [1,2,3];
//var d = [3,2,1];
var c = [0,3,1,0];
var d = [0,3,1,0];
console.log(math.sum(math.dotMultiply(c,d)))

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
            out(JSON.stringify(parseCSVToArray(content).data));
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
        skipEmptyLines: false,
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