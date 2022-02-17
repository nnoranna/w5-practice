/* console.log(a)
console.log(b)
console.log(c)
 */
// console.log("Hello!")
// console.log('Hi')
// console.log(`back
// tick`)

//console.log(typeof 2)
//console.log(typeof NaN)
//console.log(0/0)
//console.log(2.14)

//console.log(true)
//console.log(false)

//undefined = érték nélküli
//console.log(undefined)
//null = vmilyen dolog nem található, leginkább objektumokra igaz, azért mert egy object
//console.log(null)
//console.log(typeof undefined)
//console.log(typeof null)

/* console.log({
    "title": "Start Coding",
    "type": "solo",
    "difficulty": 4.2,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            title: "Bank Accounts",
            description: ""
        },
        {
            title: "100 Doors",
            description: ""
        },
        {
            title: "Word Filter",
            description: ""
        }
    ]
}) */

/*var = régi megnevezés, vmilyen scope-ban létrejön és legfentebbre rendezi a 0.sorba és deklarálja undefinedként,0. var a = undefined;; 
let = nem lehet hozzáférni inicializálás(értékeadás) előtt, de ez jó nekünk; 
const = ugyanaz a hibaüzenet jön ki, mint a let-nél, ha nincs még inicializálva*/
/* var a = "Hello1"
let b = "Hello2"
const c = "Hello3"

console.log(a)
console.log(b)
console.log(c)
 */

/*ez a function scope*/
/* function d(){
    if(1+1 === 2){
    }
    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}
d()
 */

/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e*2
console.log(e)
 */

/* function multiplyByTwo(num){
    console.log(num)
    return num*2
}
let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1));
console.log(num); */

/* let g = {
    myMethod: function (){
        console.log("Hello");
    }
}
g.myMethod()
 */
/* Ezt csak kipróbáltuk, ez nem jó és nem fog lefutni */
/* let window = {
    addEventListener: function (eventName,eventFunction){
        if ( eventName === "load" ){
            eventFunction()
        }

    }
}
window.addEventListener("load",loadEvent) */

/* let h = {
    anotherMethod: function(text){
        return `You sent the following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("argument")
console.log(i);
console.log(h.anotherMethod("another argument")); */

/* let myString = "mikkaMakka";

let mySecondString = myString;

let myThirdString = "mikkaMakka";

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString); */

/* let myObject = {
    myString: "MikkaMakka"
};

let mySecondObject = myObject; /*két irányba is működik, tehát ha megváltoztatom a mySecondobject értékét, akkor megváltozik a myObject is*/

/*let myThirdObject = {
    myString: "MikkaMakka"
};

mySecondObject.myString = "domdomdom" 

/*Object copy*/
/*let myFourthObject = {...myObject};
myFourthObject.myString = "Vacskamati";

console.log(myObject.myString);
console.log(myFourthObject.myString);
 */

/* console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject); 
 */
/*A string, szám az true lesz;
az objectnél új változót hoztunk létre, ami már más object és false lesz*/
/* console.log("" === "");
console.log({} === {}); */


/* window.addEventListener("load", function(){
    console.log("My first function")
})
 */

function loadEvent() {
    console.log("My second Function");
    let rootElement = document.getElementById("root")

    let card2 = function (title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <time>${year}</time>
            <div class="rate">${rate}</div>
        </div>`;
    }
    
    let renderAllCardElements = function (incomingMoviesArray) {
        let renderedCardList = "";
        
        /*for ciklus, ami végigmegy a cardsarray-en*/
        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += `
            <div class="card">
                <h2>${incomingMovie.title}</h2>
                <time>${incomingMovie.year}</time>
                <div class="rate">${incomingMovie.rate}</div>
            </div>`;
            
        }
        console.log(renderedCardList);
        /*return-öli az elkészült elemekkel feltöltött cardList-et*/
        return renderedCardList;

            /*a for ciklus minden lépcsőjénél hozzáadja a renderCardlisthez az adott elemet a megfelelő cardban,*/
        }

    /*movies.sort(function(a, b){return a.year - b.year});*/

    let newGoodMovies = [];

    for (const movieSend of movies) {
        /*let newerThan2000 = false;

        if (movieSend.year > 2000) {
            newerThan2000 = true;
        }
        if (newerThan2000)*/ 

        //let floorRate = Math.floor(movieSend.rate);


        /*filterezi a csak 2000 utáni filmeket*/
        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);    
            /*rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate));*/
        }
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))
}

window.addEventListener("load", loadEvent);