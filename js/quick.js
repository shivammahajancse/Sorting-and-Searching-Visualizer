var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
	for (var i = 0; i < 20; i++) {
		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block");

		// Adding style to div
		array_ele.style.height =
		`${value * 3}px`;
		array_ele.style.transform =
		`translate(${i * 30}px)`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label =
		document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

// Function to generate indexes
var count_container = document.getElementById("count");

function generate_idx() {
	for (var i = 0; i < 20; i++) {
		// Creating element div
		var array_ele2 = document.createElement("div");

		// Adding class 'block2' to div
		array_ele2.classList.add("block2");

		// Adding style to div
		array_ele2.style.height =
		`${20}px`;
		array_ele2.style.transform =
		`translate(${i * 30}px)`;

		//adding indexes
		var array_ele_label2 =
		document.createElement("label");
		array_ele_label2.classList.add("block_id3");
		array_ele_label2.innerText = i;

		// Appending created elements to index.html
		array_ele2.appendChild(array_ele_label2);
		count_container.appendChild(array_ele2);
	}
}

async function hoare_partition(l, r, delay = 700) {
	var blocks =
	document.querySelectorAll(".block");
	var pivot =
	Number(blocks[l].childNodes[0].innerHTML);

	var i = l - 1;
	var j = r + 1;

	while (true) {
		// Find leftmost element greater than
		// or equal to pivot
		do {
			i++;
			if (i - 1 >= l) blocks[i - 1].style.backgroundColor = "red";
			blocks[i].style.backgroundColor = "yellow";
			//To wait for 700 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
		} while (Number(blocks[i].childNodes[0].innerHTML) < pivot);

		// Find rightmost element smaller than
		// or equal to pivot
		do {
			j--;
			if (j + 1 <= r) blocks[j + 1].style.backgroundColor = "green";
			blocks[j].style.backgroundColor = "yellow";
			//To wait for 700 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
		} while (Number(blocks[j].childNodes[0].innerHTML) > pivot);

		// If two pointers met.
		if (i >= j) {
			for (var k = 0; k < 20; k++) blocks[k].style.backgroundColor = "#6b5b95";
			return j;
		}

		//swapping ith and jth element
		var temp1 = blocks[i].style.height;
		var temp2 = blocks[i].childNodes[0].innerText;
		blocks[i].style.height = blocks[j].style.height;
		blocks[j].style.height = temp1;
		blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
		blocks[j].childNodes[0].innerText = temp2;
		//To wait for 700 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
	}
}

// Asynchronous QuickSort function
async function QuickSort(l, r, delay = 100) {
	// QuickSort Algorithm
	if (l < r) {
		//Storing the index of pivot element after partition
		var pivot_idx = await hoare_partition(l, r);
		//Recursively calling quicksort for left partition
		await QuickSort(l, pivot_idx);
		//Recursively calling quicksort for right partition
		await QuickSort(pivot_idx + 1, r);
	}
}

// Calling generatearray function
generatearray();

// Calling generate_idx function
generate_idx();

// Calling QuickSort function
QuickSort(0, 19);
