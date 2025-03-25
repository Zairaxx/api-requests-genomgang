function prepareDough() {
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


async function checkPizza(){

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

// checkPizza()

setInterval( () => {
    console.log("Hej");
}, 3000)
