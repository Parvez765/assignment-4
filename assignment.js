// Problem:1  radianToDegree

function radianToDegree(radian) {

    if (typeof radian !== "number") {
        return "Please Input A Number";
    }    

    const PI = 3.1416;
    let degree = radian * (180 / PI);
    return degree.toFixed(2);
}

console.log(radianToDegree(199));


// Problem:2  isJavaScriptFile

function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return "Please Enter A String";
    } else {
        if (fileName.endsWith(".js")) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isJavaScriptFile("app.js"));


// Problem 3: oilPrice

function oilPrice(disealQuantity, petrolQuantity, octenQuentity) {
    if (typeof disealQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octenQuentity !== "number") {
        return "Please Input A Valid Number"
    }

    let disealPrice = 114;
    let petrolPrice = 130;
    let octenPrice = 135;

    let amountOfDiseal = disealQuantity * disealPrice;
    let amountOfPetrol = petrolQuantity * petrolPrice;
    let amountOfOcten = octenQuentity * octenPrice;

    let totalAmount = amountOfDiseal + amountOfPetrol + amountOfOcten;
    return totalAmount;
}

console.log(oilPrice(0, 2, 3));


// Problem 4: publicBusFare

function publicBusFare(number) {
    if (typeof number !== "number") {
        return "Please Input A Valid Number"
    }
    const busCapacity = 50;
    const microCapacity = 11;

    let busNeed = Math.floor(number / busCapacity);
    let peopleLeftByBus = busCapacity * busNeed;
    let peopleRemain = number - peopleLeftByBus;
    

    let microNeed = Math.floor(peopleRemain / microCapacity);
    let peopleLeftByMicro = microCapacity * microNeed;
    let peopleLeftForPublicTransport = peopleRemain - peopleLeftByMicro;
    

    const publicTransportFare = 250;
    let totalFare = peopleLeftForPublicTransport * publicTransportFare;
    return totalFare;
    
     
}
console.log(publicBusFare(49));


// Problem 5: isBestFriend

function isBestFriend(objectOne, objectTwo) {
    if (typeof objectOne !== "object" || typeof objectTwo !== "object") {
        return "Please Enter An Object";
    }
    else {
        if (objectOne.name === objectTwo.friend && objectOne.friend === objectTwo.name) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isBestFriend({ name: "abul", friend: "kabul" }, { name: "kabul", friend: "abul" }));