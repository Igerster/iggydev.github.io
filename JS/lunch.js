const local = ['Arbys', 'Burger King', 'Taco Bell', 'Long John Silver', 'Subway', 'Mi Terria', 'Gustavos', 'Savormex', 'El Nopal', 'Chen Garden', 'HomeTown', 'Cracker Barrel', 'Taste of Thai' ];

const notLocal = ['Arbys', 'Burger King', 'Taco Bell', 'Long John Silver', 'Subway', 'Mi Terria', 'Gustavos', 'Savormex', 'El Nopal', 'Chen Garden', 'HomeTown', 'Cracker Barrel', 'Taste of Thai', 'Chick Fil A', 'Penn Station', 'World of Beer', 'BW3s', ];

let numOfStaff = document.getElementById(numberOfStaff);

let medPickUp = document.getElementById(yes);

let randomLocalFood = local[Math.floor(Math.random() * local.length)];

let randomNotLocalFood = notLocal[Math.floor(Math.random() * notLocal.length)];


function med(){
  if (medPickUp) {
    return randomNotLocalFood.innerHTML(winner);
  } else {
    return randomLocalFood.innerHTML(winner);
  }
}


// let numOfStaff = document.getElementById(numberOfStaff);

// let medPickUp = document.getElementById(yes);


// document.getElementById('radio') = function(medical)

// let randomLocalValue = local[Math.floor(Math.random() * local.length)];

// let randomNotLocalValue = notLocal[Math.floor(Math.random() * notLocal.length)];






console.log(randomLocalFood);
