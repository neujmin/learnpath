console.log('Welcome');

var markH = 1.80;
var markW = 80;
var johnH = 1.96;
var johnW = 105;

function bmi (height, weight) {
	return weight / (height * height);
}

var markBMI = bmi(markH, markW);
var johnBMI = bmi(johnH, johnW);

function whetherMarkHasHigherBmiThanJohn(markBMI, johnBMI) {
	if (markBMI > johnBMI) {
		return true;
	} else return false;

	// if (markBMI > johnBMI) ? true : false;
}


var markHasHigherBmiThanJohn = whetherMarkHasHigherBmiThanJohn(markBMI, johnBMI);

console.log("Is Mark's BMI higher than John's? " + markHasHigherBmiThanJohn);