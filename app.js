/* console.log("Hi");

localStorage.setItem("name","nimal" )
localStorage.setItem("name1","ranil" )
localStorage.setItem("name2","vimal" )
localStorage.setItem("name3","sunil" )

localStorage.removeItem("name1");

let custName = localStorage.getItem("name");

console.log(custName); */

//localStorage.clear();

/* let customer = {
    name: "kamal",
    age: 12,
    isActive: true
}

let stringCustomer = JSON.stringify(customer);

localStorage.setItem("customer", stringCustomer);

let retCustomer = localStorage.getItem("customer");

let jsonCustomer = JSON.parse(retCustomer);

console.log(jsonCustomer);
 */

const apiKey = "978819ff895447a78c470650262507"

const baseUrl = "https://api.weatherapi.com/v1"

fetch(`${baseUrl}/Current.json?key=${apiKey}&q=panadura`).then(res=>res.json()).then(data=>{

    document.getElementById("contentSection").innerHTML=`
        <div>
            <h1>${data.current.condition.text}</h1>
            <h1>${data.location.name}</h1>
            <img src="${data.current.condition.icon}" alt="">
            <p>${data.location.country}</p>
            <p>${data.current.temp_c}</p>
        </div>

    `
})

function btnSearchOnAction(){
    let txtUserSearchValue = document.getElementById("txtSearch").value;
    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${txtUserSearchValue}`).then(res=>res.json()).then(data=>{
    console.log(data);

    document.getElementById("contentSection").innerHTML=`
                <div>
                <h1>${data.current.condition.text}</h1>
                <h1>${data.location.name}</h1>
                <img src="${data.current.condition.icon}" alt>
                <p>${data.location.country}</p>
                <p>${data.current.temp_c}</p>
            </div>
    `
    
})
}

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.longitude);
    console.log(position.coords.longitude);
    console.log(position.coords.longitude);
    console.log(position.coords.longitude);
    
});
