import Krippendorff from './krippendorff.js';

window.calculate = function calculate() {
    var file = document.getElementById('csvInput').files[0];
    if (!file) {
        out('Please select a file');
        return;
    }
    const fileContent = getFileContent(file);
    if (!fileContent) {
        out('Cannot read file content');
        return;
    }


    //out(fileContent);
    // const calculator = new Krippendorff();
    // out(calculator.data);
}



function getFileContent(fileDOM) {
    let content = null;
    let reader = new FileReader();
    reader.onload = function(){
        content = reader.result;
    };
    reader.readAsText(fileDOM);
    return content;
}

function out(text) {
    document.getElementById('output').innerHTML = text;
}