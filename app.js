const button = document.querySelector('.button');
const evenNumbers = document.querySelector('[data-value="even"]');
const oddNumbers = document.querySelector('[data-value="odd"]');

const RANDOM_NUMBERS_QUANTITY = 20;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomNumbers = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sortNumbers = arr => arr.sort((a, b) => a - b);

const sortAndGroupNumbers = arr => {
	const sortArr = sortNumbers(arr);
	const even = sortArr.filter(n => n % 2 === 0);
	const odd = sortArr.filter(n => n % 2 !== 0);
	return { even, odd };
};

const generateNewList = (
	numbersArrType,
	numbersHtmlType,
	elHtml = 'li',
	elClass = 'numberList__item'
) => {
	numbersHtmlType.innerHTML = '';
	numbersArrType.forEach(n => {
		const htmlEl = document.createElement(elHtml);
		htmlEl.classList = elClass;
		htmlEl.innerText = n;
		numbersHtmlType.appendChild(htmlEl);
	});
};

const generateNumbers = () => {
	const randomNumbers = Array.from({ length: RANDOM_NUMBERS_QUANTITY }, () =>
		getRandomNumbers(MIN_NUMBER, MAX_NUMBER)
	);

	const { even, odd } = sortAndGroupNumbers(randomNumbers);

	generateNewList(even, evenNumbers);
	generateNewList(odd, oddNumbers);
};

button.addEventListener('click', generateNumbers);
