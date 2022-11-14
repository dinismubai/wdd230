/*const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}*/

// *****************************************************************************
const requestURL = 'json/data.json';
const organizations = document.querySelector(".directory");


fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
    const companies = jsonObject["companies"];
    console.table(jsonObject);
    companies.forEach(displayCompanies);
  // temporary checking for valid response and data parsing
});



function displayCompanies(company) {
    // Create elements to add to the document
    let organization = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let name = document.createElement('h4');
    let address = document.createElement('h4');
    let phone = document.createElement('h4');
    let weburl = document.createElement('h4');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${company.name}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('class', 'imgdirectory');
    organization.setAttribute('class', "sectiondirectory");
    //portrait.setAttribute('alt', 'Portait of ' + `Portrait of ${company.name} ${company.lastname} ${company.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    name.innerText = `${company.name}`;
    address.innerText = `${company.address}`;
  
    // Add/append the section(card) with the h2 element
    organization.appendChild(h2);
    organization.appendChild(name);
    organization.appendChild(address);
    organization.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.directory').appendChild(organization);
  }