let butSortOne = document.querySelectorAll('.sortOne div');
let butSortTwo = document.querySelectorAll('.sortTwo div');
let h2One = document.querySelectorAll('.sortOne div h2');
let h2Two = document.querySelectorAll('.sortTwo div h2');
let spanSortOne = document.querySelectorAll('.sortOne div h1 span');
let spanSortTwo = document.querySelectorAll('.sortOne div h2 span');

body.addEventListener('click', hideSort);

function hideSort(event) {
	if (event.target.parentNode.className !== 'col' &&
		event.target.parentNode.className !== 'sortOne') {
		butSortOne[1].classList.remove('show');
	}
	if (event.target.parentNode.className !== 'srt' &&
		event.target.parentNode.className !== 'sortTwo') {
		butSortTwo[1].classList.remove('show');
	}
}

butSortOne[0].onclick = function () {
	butSortOne[1].classList.toggle('show');
	butSortOne[1].style.display = 'flex';
}
butSortTwo[0].onclick = function () {
	butSortTwo[1].classList.toggle('show');
	butSortTwo[1].style.display = 'flex';
}


for (let i = 0; i < h2One.length; i++) {
	h2One[i].onclick = function () {
		for (let i = 0; i < h2One.length; i++) {
			h2One[i].classList.remove('active');
			h2One[i].span = spanSortTwo[i].textContent;
		}
		h2One[i].classList.add('active');
		butSortOne[1].classList.toggle('show');
		spanSortOne[0].textContent = h2One[i].span;
		notesOnPage = +h2One[i].span
		if (curItems == 1) {
			return
		} else {
			pagi();
		}
		butSortOne[1].style.display = 'none';
		let list = document.querySelector('.list');
		let item = document.querySelectorAll('.item');
		if (item.length <= 9) {
			list.style.maxHeight = 78.3410138249 + 'vw';
			list.style.overflow = 'hidden';
		} else {
			list.style.maxHeight = 'inherit';
			list.style.overflow = 'inherit';
		}
		shadowItem();
	}
}

for (let i = 0; i < h2Two.length; i++) {
	h2Two[i].onclick = function () {
		if (DataOpen.length <= 1) {
			return false
		}
		for (let i = 0; i < h2Two.length; i++) {
			h2Two[i].classList.remove('active');
		}
		h2Two[i].classList.add('active');
		butSortTwo[1].classList.toggle('show');

		if (tabs) {
			none = 0
		} else {
			none = 1;
		}
		if (i == 0) {
			sort = 'normal';
			pagi();
		} else if (i == 1) {
			sort = '+';
			pagi();
		} else if (i == 2) {
			sort = '-';
			pagi();
		} else if (i == 3) {
			sort = 'new';
			pagi();
		} else if (i == 4) {
			sort = 'old';
			pagi();
		}
		butSortTwo[1].style.display = 'none';
		let list = document.querySelector('.list');
		let item = document.querySelectorAll('.item');
		if (item.length <= 9) {
			list.style.maxHeight = 78.3410138249 + 'vw';
			list.style.overflow = 'hidden';
		} else {
			list.style.maxHeight = 'auto';
			list.style.overflow = 'inherit';
		}
		shadowItem();
	}
}


function toNumber(a) {
	let price = +a.price;
	return price;
}

function min(a, b) {
	let aPrice = toNumber(a);
	let bPrice = toNumber(b);
	if (aPrice > bPrice) return 1;
	if (aPrice == bPrice) return 0;
	if (aPrice < bPrice) return -1;
}
