//  pandaCost

 const foods = [
        {name:'singara' , price:7, quantity:5 },
        {name:'samucha' , price:10, quantity:2 },
        {name:'jilapi' , price:15, quantity:3 }
    ];
    
    let foodstotal = 0;
    
    for (const food of foods){
        console.log(food);
        const foodtotal = food.price*food.quantity;
        foodstotal = foodstotal + foodtotal;
        } 
    console.log(foodstotal);  

