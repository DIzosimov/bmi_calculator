const chai = require('chai');
const BrowsersHelpers = require('e2e_training_wheels');
global.browser = new BrowsersHelpers();
global.expect = chai.expect
global.Person = require('./src/js/person.js')
global.BMICalculator = require('./src/js/bmi_calculator')