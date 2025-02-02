// bmiCalculator.js

const calculateMetricBMI = (weight, height) => {
    
    let result
    result = (weight / ((height / 100) * (height / 100))).toFixed(2)
    return result
}

const getBMIClassification = (value) => {
	if (value < 18.5) {
    return  "Underweight"
        } else  if (value < 25) {
    return  "Normal Weight"
        } else  if(value < 30) {
    return  "Overweight"
    }
}