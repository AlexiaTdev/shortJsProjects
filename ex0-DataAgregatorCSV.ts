// data entry examples
const orders = [
    { 
      username: "John Doe", 
      cardNumber: 1234, 
      dishes: [123,456] 
    }
  ];
  
  const dishes = [
    {
      id: 123,
      name: 'Sushi', 
      cost: 12 
    }, 
    {
      id: 456,
      name: "Soup", 
      cost: 5 
    },
    {
      id: 987,
      name: "Pancakes", 
      cost: 7 
    }  
  ];

  type orderObjectType = { 
    username: string, 
    cardNumber: number, 
    dishes: Array<number> 
  }
  type dishObjectType = {
    id: number,
    name: string, 
    cost: number 
  }

// data output expected
//const odersCSV = ['username,cardNumber,dishes,totalcost', 'John Doe,1234,Sushi/Soup,17'].join('\n')

function getOrderDishNameAndCostReduced(dishesIdArray: Array<number>, dishesArray: Array<dishObjectType>){
    let dishesNamesArray = dishesArray.map((dish)=>{
        return (dishesIdArray.includes(dish.id))?  dish.name : null
    })

    let dishTodalCost= dishesArray.reduce((sum, dish)=> {
        return sum + (dishesIdArray.includes(dish.id)? dish.cost : 0)}, 0)
    
    return [dishesNamesArray.join('//'), dishTodalCost];
}

// headers row
const headers = Object.keys(orders[0]);
headers.push('totalcost');

const rows = orders.map((order)=>{
    // make a row based on order
    const username = order.username;
    const cardNumber = order.cardNumber;
    const [dishesNames, totalcost] = getOrderDishNameAndCostReduced(order.dishes, dishes);
    return [username, cardNumber, dishesNames, totalcost];
})

const csv = [headers.join(','), rows.map((row)=>row.join(','))].join('\n');

// ANSWERS
//Construct CSV
console.log(csv)

//How to prevent untrusted unreliable thirdParty to crash the program?
//define a type for the object received in the array of objects
