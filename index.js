console.clear();


//storing data
let stock={
    Fruits :["Strawberry", "Grapes", "Banana", "Apple", "Mango"],
    Liquid :["water","Ice"],
    Holder :["Cone","Cup","Stick"],
    Topping:["Chocolate","peanuts","Sprinkles"],
}

//PROMISES
let shop_open=true;

let Order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(shop_open){
            setTimeout(()=>{
                //console.log("Shop is open")
                resolve(work())
            },time)
        }
        else{
            reject(console.log("Shop is closed"))
        }
    })
}

// step 1
Order(2000,()=>console.log(`${stock.Fruits[0]} was selected`))

// step 2
.then(()=>{
  return Order(0,()=>console.log('1.production has started'))
})
//step3
.then(()=>{
    return Order(2000,()=>console.log('2.fruit has chopped'))
  })
//step4
.then(()=>{
    return Order(1000,()=>console.log(`3.${stock.Liquid[0]} and ${stock.Liquid[1]} added`))
  })
  //step5
.then(()=>{
    return Order(1000,()=>console.log("4.Start the machine"))
  })
//step6
.then(()=>{
    return Order(2000,()=>console.log(`5.ice cream placed on ${stock.Holder[1]}`))
  })
//step7
.then(()=>{
    return Order(6000,()=>console.log(`6.${stock.Topping[0]} as toppings`))
  })
//step8
.then(()=>{
    return Order(2000,()=>console.log("7.Serve Ice Cream"))
  })

.catch(()=>{
    console.log("Customer Left")
})

.finally(()=>{
    console.log("End of the Day")
})
//Exporting the order function
module.exports=Order;