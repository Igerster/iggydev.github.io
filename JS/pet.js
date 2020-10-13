let pet_info = {
    name: "Iggy",
    weight: 7,
    happiness: 0
}

function checkWeight () {
    let petWeight = 6;
    if (petWeight > 10){
        console.log("Damn your cat is fat!")
    }
    else {
        console.log("Your cat is fine!")
    }
}

function clickTreatButton(){
    pet_info['happiness'] = pet_info['happiness'] + 1
    pet_info['weight'] = pet_info['weight'] + 1
}

function clickPlayButton(){
    pet_info['happiness'] = pet_info['happiness'] + 1
    pet_info['weight'] = pet_info['weight'] - 1
}

console.log(petWeight);
checkWeight();


