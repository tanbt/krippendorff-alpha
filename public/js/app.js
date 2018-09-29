import Krippendorff from './krippendorff.js';

const calculator = new Krippendorff();
out(calculator._data);

function out(text){
    document.getElementById('output').innerHTML = text;
}