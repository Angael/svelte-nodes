export const getOffsetFromEditor = (element: HTMLElement): [number, number] => {
	let left = element.offsetLeft + element.clientWidth / 2;
	let top = element.offsetTop + element.clientHeight / 2;
	let currentElement = element;

	// sum all parent's
	console.group('loop elements');
	while (true) {
		if (currentElement.dataset.tag === 'editor' || !currentElement.parentElement) {
			break;
		}

		console.log(currentElement, [currentElement.offsetLeft, currentElement.offsetTop]);

		left += currentElement.offsetLeft;
		top += currentElement.offsetTop;
		currentElement = currentElement.parentElement;
	}
	console.groupEnd();

	return [left, top];
};
