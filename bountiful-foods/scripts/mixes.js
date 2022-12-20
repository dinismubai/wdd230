// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".mixes");

// get the stored value in localStorage
let numMixes = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numMixes !== 0) {
	visitsDisplay.textContent = numMixes;
} else {
	visitsDisplay.textContent = `First special drink!`;
}

// increment the number of visits.
numMixes++;
// store the new number of visits value
localStorage.setItem("visits-ls", numMixes);