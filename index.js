function prepareDough() {
    //Ett promise som resolve efter 2 sekunder.
    //Returnerar sen strängen "Dough is ready"
    return new Promise((resolve) => {
        console.log("Preparing dough...");
        setTimeout(() => {
            resolve("Dough is ready");
        }, 2000);
    });
}

function addToppings() {
    return new Promise((resolve) => {
        console.log("Adding toppings...");
        setTimeout(() => {
            resolve("Toppings added");
        }, 2500);
    });
}

function bakePizza() {
    return new Promise((resolve,reject) => {
        console.log("Baking pizza...");
        setTimeout(() => {
            resolve("Pizza is ready!");
            //Testa kommentera bort resolve()-functionen ovan. Använd istället reject()-funktionen nedan.
            // Vad händer då när du kör eatPizza() ?
            //reject("Dinner is ruined :(")
        }, 3000);
    });
}

function servePizza() {
    return new Promise((resolve) => {
        console.log("Serving pizza...");
        setTimeout(() => {
            resolve("Pizza is ready to eat!");
        }, 1000);
    });
}

// Chaining the promises
// prepareDough()
//     .then((message) => {
//         console.log(message);
//         return addToppings();
//     })
//     .then((message) => {
//         console.log(message);
//         return bakePizza();
//     })
//     .then((message) => {
//         console.log(message);
//         return servePizza();
//     })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("Something went wrong:", error);
//     });


async function eatPizza(){
    //Async/await istället för .then();
    try {
        let dough = await prepareDough();
        console.log(dough)
        let pizza = await addToppings();
        console.log(pizza)
        let finishedPizza = await bakePizza();
        console.log(finishedPizza)
        let foodTime = await servePizza();
        console.log(foodTime)
    } catch(err) {
        console.error("Dinner is ruined! ", err)
    }
}

//Kör funktionen nedan för att se promise-kedjan köras med async/await
// eatPizza()


// Kommentera fram blocket nedan för att sätta igång timer

// setInterval( () => {
//     console.log("Hej");
// }, 3000)
