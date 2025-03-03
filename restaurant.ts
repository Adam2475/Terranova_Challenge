let menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

var cashInRegister = 100
var nextOrderId = 1
let orderQueue = [
    {id: 0,
    pizza: {
          name: "string",
           price: 0,
         },
    status: "string",
    },
]

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza)
        return ("Error!")
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order)
        return "Error!"
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

// function completeOrder(orderId)
// {
//     const result = orderQueue.find(newOrder => orderId === newOrder.orderId)
//     result.status = "Completed"
//     return result
// }

// function placeOrder(pizzaName)
// {
//     var i = 0;
//     var orderObj;
//    while(menu[i])
//    { 
//         if (!menu[i].name.localeCompare("pizzaName"))
//         {
//             menu[i].price
//             cashInRegister += menu[i].price
//             orderObj = {pizza: pizzaName, status: "ordered"}
//             orderQueue.push(orderObj)
//             return orderObj
//         }
//    }
//    return null
// }
