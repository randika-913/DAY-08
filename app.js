/* console.log("Hi");

localStorage.setItem("name","nimal" )
localStorage.setItem("name1","ranil" )
localStorage.setItem("name2","vimal" )
localStorage.setItem("name3","sunil" )

localStorage.removeItem("name1");

let custName = localStorage.getItem("name");

console.log(custName); */

//localStorage.clear();

let customer = {
    name: "kamal",
    age: 12,
    isActive: true
}

let stringCustomer = JSON.stringify(customer);

localStorage.setItem("customer", stringCustomer);

let retCustomer = localStorage.getItem("customer");

let jsonCustomer = JSON.parse(retCustomer);

console.log(jsonCustomer);
