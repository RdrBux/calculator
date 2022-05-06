// Basic operators

function add(num1, num2) { return num1 + num2; }

function subtract(num1,num2) { return num1 - num2; }

function multiply(num1, num2) { return num1 * num2; }

function divide(num1, num2) { return num1 / num2; }


function operate(operator, num1, num2) {
	return operator(Number(num1), Number(num2));
}


// Display values on screen
let displayValue = '';
let displaySmallValue = '';
const display = document.querySelector('.text');
const displaySmall = document.querySelector('.text-small');
display.textContent = '';
displaySmall.textContent = '';


const btnNumbers = document.querySelectorAll('.num');
btnNumbers.forEach(btn => numBind(btn));

function numBind(btn) {
	btn.addEventListener('click', function (e) {
		displayValue += btn.textContent;
		display.textContent = displayValue;

	});
};


// Button operators functionality
const btnOperators = document.querySelectorAll('.operator');
btnOperators.forEach(btn => btnOperatorsFunctions(btn));
let operation = '';	
let value1 = '';
let value2 = '';
let result = '';

function btnOperatorsFunctions(btn) {
	btn.addEventListener('click', function (e) {
		// Calculate results if already doing a calculation
		if (operation) {
			value2 = displayValue;
			result = operate(window[operation], value1, value2);
			display.textContent = result;
			displayValue = result;
		}
		// Update small display
		value1 = displayValue;
		displaySmall.textContent = `${value1} ${btn.textContent}`;
		
		// Refresh display
		displayValue = '';
		display.textContent = '';

		// Extract operation and wait to operate
		operation = btn.classList[2];
	});
};


// Results with "equals" button
const equals = document.querySelector('.equals-sign');
equals.addEventListener('click', function (e) {
	value2 = displayValue;
	result = operate(window[operation], value1, value2);
	display.textContent = result;
	displayValue = result;
	operation = '';
});


// Clear button
const clear = document.querySelector('.clear')
clear.addEventListener('click', function (e) {
	value1 = '';
	value2 = '';
	displayValue = '';
	display.textContent = '';
	displaySmall.textContent = '';
	operation = '';
});

// Undo button
const undo = document.querySelector('.undo');
undo.addEventListener('click', function (e) {
	if (displayValue.length > 0) {
		displayValue = displayValue.slice(0, displayValue.length - 1);
		display.textContent = displayValue;
	}
})