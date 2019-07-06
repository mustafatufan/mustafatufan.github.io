// experience-duration.js

$(document).ready(function () {
	let lastJobStartDate = moment('2019-05-01 00:00:00');
	let firstJobStartDate = moment('2016-03-01 00:00:00');
	document.getElementById("currentExperience").innerText = calcDate(lastJobStartDate, moment());
	document.getElementById("totalExperience").innerText = calcDate(firstJobStartDate, moment());
});

function calcDate(starts, ends) {
	var duration = moment.duration(ends.diff(starts))
	months = duration.months() + 1;
	years = duration.years();
	diff = ''
	if (years > 0) {
		diff = years.toString() + ' year';
		if (years > 1) {
			diff += 's'
		}
	}
	if (months > 0) {
		if (years > 0) {
			diff += ', '
		}
		diff += months.toString() + ' months';
	}
	return '(' + diff + ')';
}