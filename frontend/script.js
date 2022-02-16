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
    for (const movie of movies) {
        document.getElementById("root").insertAdjacentHTML("beforeend", `
        <div class="card">
            <h1>${movie.title}</h1>
            <h2>${movie.year}</h2>
            <h2>${movie.rate}</h2>
        </div>
        `)
    }
}
window.addEventListener("load", loadEvent);