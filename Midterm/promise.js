function processOrder() {
    return new Promise((resolve, reject) => {

        console.log("Processing order.....");

        setTimeout(() => {

            const success = true;

            if (success) {
                resolve({
                    orderid: 4287,
                    customer: "Shawon",
                    item: "Chicken Burger",
                    quantity: 2,
                    total: 500
                });
            } else {
                reject("Failed to process the order");
            }

        }, 2000);

    });
}
processOrder()
    .then ((order) =>{
        console.log("Order ID: ", order.orderid)
        console.log("Customer: ", order.customer)
        console.log("Item: " ,order.item)
        console.log("Quantity: " ,order.quantity)
        console.log("Total: " ,order.total)
        })

    .catch ((error)=>{
        console.log("Error!",error)
        })