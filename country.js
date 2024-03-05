class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "marhaban bialealami!", ["blue", "yellow", "red"]);
let tuvalu = new Country("Tuvalu", "Tuvaluan", "Tālofa!", ["blue", "white", "yellow"]);
let barbados = new Country("Barbados", "English", "Hello world!", ["blue", "yellow", "black"]);


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;
    if (input === "USA") {
        country = usa;
        DisplayColors(country);
    }
    else if (input === "Mexico") {
        country = mexico;
        console.log(country);
        DisplayColors(country);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(country);
    }
    else if (input === "Tuvalu") {
        country = tuvalu;
        DisplayColors(country);
    }
    else if (input === "Barbados") {
        country = barbados;
        DisplayColors(country);
    }
    
}
//nodes
let color1Node = document.querySelector("#Color1");
let color2Node = document.querySelector("#Color2");
let color3Node = document.querySelector("#Color3");
let countryNameNode = document.querySelector("#CountryName");
let languageNode = document.querySelector("#OfficialLanguage");
let helloNode = document.querySelector("#HelloWorld");

function DisplayColors(country) {
    color1Node.style.backgroundColor = country.colors[0];
    color2Node.style.backgroundColor = country.colors[1];
    color3Node.style.backgroundColor = country.colors[2];
    countryNameNode.innerText = country.name;
    languageNode.innerText = country.lang;
    helloNode.innerText = country.greeting;
}