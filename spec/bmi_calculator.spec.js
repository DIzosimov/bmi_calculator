// spec/bmi_calculator_spec.js
require('../spec.helper.js')

describe('BMICalculator', () => {
    let bmi_calculator
    let person

    beforeEach(() => {
        person = new person({weight: 90, height: 186});
        bmi_calculator = new bmi_calculator();
    });

    it('calculates BMI for a person using metric method', () => {
        bmi_calculator.metric_bmi(person)
        expect(person.bmiValue).to.eql(26.01)
    });

    it("sets BMI message for a person using metric method", () => {
        bmi_calculator.metric_bmi(person);
        expect(person.bmiMessage).to.equal('Overweight');
    });
})