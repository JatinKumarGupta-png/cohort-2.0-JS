
let arr = [{
        team: "CSK",
        primary : "Yellow",
        Secondary: "Blue",
        FullName: "Chennai Super Kings",
        trophies: 4,
        captain: "MS Dhoni",
    },  
    {
        team: "MI",
        primary : "orange",
        Secondary: "dark red",
        FullName: "Mumbai Indians",
        trophies: 5,
        captain: "Rohit Sharma",
    },
    {
        team: "RCB",
        primary : "Red",
        Secondary: "silver",     
        FullName: "Royal Challengers Bangalore",
        trophies: 0,
        captain: "Faf Du Plessis",
    },
    {
        team: "KKR",
        primary : "Purple",
        Secondary: "navy",      
        FullName: "Kolkata Knight Riders",      
        trophies: 2,
        captain: "Shreyas Iyer",

    },{
        team: "SRH",
        primary : "Orange",
        Secondary: "Grey",      
        FullName: "Sunrisers Hyderabad",      
        trophies: 1,
        captain: "Aiden Markram",
    },
    {
        team: "DC",
        primary : "green",
        Secondary: "Red",
        FullName: "Delhi Capitals",
        trophies: 0,
        captain: "Rishabh Pant",
    },                  
    {
        team: "PBKS",
        primary : "black",
        Secondary: "crimson",       
        FullName: "Punjab Kings",       
        trophies: 0,
        captain: "Shikhar Dhawan",
    },
    {
        team: "RR",
        primary : "blue",
        Secondary: "pink",      
        FullName: "Rajasthan Royals",      
        trophies: 1,
        captain: "Sanju Samson",
    },
    {
        team: "LSG",
        primary : "Yellow",
        Secondary: " Blue",
        FullName: "Lucknow Super Giants",
        trophies: 0,
        captain: "K.L Rahul",
    },
    {
        team: "GT",
        primary : "Blue",
        Secondary: "Silver",
        FullName: "Gujarat Titans",
        trophies: 1,
        captain: "Hardik Pandya",
    }                              
]

let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
        let winner = arr[Math.floor(Math.random() * arr.length)]
        h1.innerHTML = winner.team
        h1.innerHTML += `<p>Full Name: ${winner.FullName}</p>`
        h1.innerHTML += `<p>Trophies Won: ${winner.trophies}</p>`
        h1.innerHTML += `<p>Captain: ${winner.captain}</p>`
        h1.style.backgroundColor = winner.Secondary
       
        body.style.backgroundColor = winner.primary

})
      



