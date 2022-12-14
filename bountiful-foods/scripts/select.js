
const requestURL = 'json/fruit.json';
const fruits1 = document.querySelector("#fruit1");
const fruits2 = document.querySelector("#fruit2");
const fruits3 = document.querySelector("#fruit3");

fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
    const fruits = jsonObject["fruits"];
    console.table(jsonObject);
    fruits.forEach(displayFruits);
  // temporary checking for valid response and data parsing
});

var btn = document.getElementById("btn");
	    // add event listener for the button, for action "click"
	    btn.addEventListener("click", displayFruits);

//FIRST LIST
function displayFruits(fruit) {
    let list1 = document.createElement('option');
    let carbo1 = fruit.nutritions.carbohydrates;
    let protein1 = fruit.nutritions.protein;
    let fat1 = fruit.nutritions.fat;
    let sugar1 = fruit.nutritions.sugar;
    let calories1 = fruit.nutritions.calories;
    list1.setAttribute('value', "name");
    list1.innerHTML = fruit.name;

    let list2 = document.createElement('option');
    let carbo2 = fruit.nutritions.carbohydrates;
    let protein2 = fruit.nutritions.protein;
    let fat2 = fruit.nutritions.fat;
    let sugar2 = fruit.nutritions.sugar;
    let calories2 = fruit.nutritions.calories;
    list2.setAttribute('value', "name");
    list2.innerHTML = fruit.name;

    let list3 = document.createElement('option');
    let carbo3 = fruit.nutritions.carbohydrates;
    let protein3 = fruit.nutritions.protein;
    let fat3 = fruit.nutritions.fat;
    let sugar3 = fruit.nutritions.sugar;
    let calories3 = fruit.nutritions.calories;
    list3.setAttribute('value', "name");
    list3.innerHTML = fruit.name;
    
    document.querySelector('#fruit1').appendChild(list1);
    document.querySelector('#fruit2').appendChild(list2);
    document.querySelector('#fruit3').appendChild(list3);

    let sumcarbo = 0;
    let sumprotein = 0;
    let sumfat = 0;
    let sumsugar = 0;
    let sumcalories = 0;

    sumcarbo = carbo1 + carbo2 + carbo3;
    sumprotein = protein1 + protein2 + protein3;
    sumfat = fat1 +  fat2 + fat3;
    sumsugar = sugar1 + sugar2 + sugar3;
    sumcalories = calories1 + calories2 + calories3;

    let carb = document.createElement("h3");
    carb.innerText = `Total Carbs: ${sumcarbo}`;
    let protein = document.createElement("h3");
    protein.innerText = `Total Protein: ${sumprotein}`;
    let fat = document.createElement("h3");
    fat.innerText = `Total Fat: ${sumfat}`;
    let sugar = document.createElement("h3");
    sugar.innerText = `Total Sugar: ${sumsugar}`;
    let calories = document.createElement("h3");
    calories.innerText = `Total Calories: ${sumcalories}`;

    let pname = document.getElementById("fname").value;
    let thename = document.createElement("h3");
    thename.innerText = `Name: ${pname}`;

    let email = document.getElementById("email").value;
    let theemail = document.createElement("h3");
    theemail.innerText = `Email: ${email}`;

    let phone = document.getElementById("phone").value;
    let thephone = document.createElement("h3");
    thephone.innerText = `Phone: ${phone}`;

    let output = document.createElement('section');
    output.appendChild(thename);
    output.appendChild(theemail);
    output.appendChild(thephone);

    output.appendChild(carb);
    output.appendChild(protein);
    output.appendChild(fat);
    output.appendChild(sugar);
    output.appendChild(calories);
    
  }


