document.addEventListener('DOMContentLoaded', function (e) {
	const baseUrl = 'http://localhost:3000/pups';
	const dogSummaryContainer = document.getElementById('dog-summary-container');
	const filterDiv = document.getElementById('filter-div');
	const dogBar = document.getElementById('dog-bar');
	const dogInfo = document.getElementById('dog-info');

	fetch(baseUrl)
		.then(res => res.json())
		.then(dogs => dogs.forEach((dog) => {
			dogBar.innerHTML += `<span data-id="${dog.id}">${dog.name}</span>`
		}));

	dogBar.addEventListener('click', function (e) {
		fetch(baseUrl + `/${e.target.dataset.id}`)
			.then(res => res.json())
			.then((dog) => {
				dogInfo.innerHTML = `
          <img src=${dog.image}>
          <h2>${dog.name}</h2>
          <button data-id="${dog.id}">Good Dog!</button>
        `
			});
	});

	dogSummaryContainer.addEventListener('click', function (e) {

		if (e.target.textContent === 'Good Dog!') {
			e.target.textContent = 'Bad Dog!'
		} else {
			e.target.textContent = 'Good Dog!'
		}

	});

	filterDiv.addEventListener('click', function (e) {
		if(e.target.textConent === 'Filter good dogs: ON'){
			e.target.textContent = 'Filter good dogs: OFF'
		}
		else {
			e.target.textContent = 'Filter good dogs: ON'
		}
	});

});
