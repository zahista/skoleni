console.log('Hello, world!');


var myName = 'John';
//let myName = 'John';

let number = 5;

let isTrue = true;
let isFalse = false;

let personName = 'John';


let i = 1;

let cisloJedna = 5;
let cisloDve = 10;

// Výpočet se nikam neuložil
cisloJedna + cisloDve;

// nyní ano
let noveCislo = cisloJedna * cisloDve;

let ahoj = "Ahoj ";
let svete = "světe!";

// dokonce můžeme přidávat i věci, které nemáme v proměnných
// pokud jsou stejného datového typu
let zprava = ahoj + svete;

let promenna = "nastavená hodnota";

promenna = "nová hodnota";

const konstanta = "Hodnota, kterou nemůžu změnit";

//konstanta = "Nemůžu změnit";

// vytvoření funkce bez argumentů - prázdné kulaté závorky
function vypisCislo() {
    console.log(10);  // zde používáme předpřipravené funkce z prohlížeče
}



// vytvoření nové funkce se dvěma argumenty
function secti(a, b) {
    // zde vypočtenou hodnotu tazvaně vrátíme z funkce pomocí return
    return a + b;
}


secti(5, 10);
secti(5, 1);
secti(10, 154);
secti(10, 10);


let vypocteno = secti(7, 8);


if (1 < 2) {
    console.log('1 je menší než 2');
}else{
    console.log('1 není menší než 2');
}

if (1<2){
    console.log('1 je menší než 2');
}else if(1<3){
    console.log('1 je menší než 3');
}else if(1<3){
    console.log('1 je menší než 3');
}else if(1<3){
    console.log('1 je menší než 3');
}else if(1<3){
    console.log('1 je menší než 3');
}else{
    console.log('1 je menší než 3');
}


if (1 < 2) {

}

/*
    switch (p) {
        case 1: // toto vlastně znamená: p === 1 ?
            console.log('První místo!');
            break;
        case 2:
    console.log('Druhé místo!');
            break;
        case 3:
            console.log('Třetí místo!');
            break;
        case 4: // case si můžete představit jako elseif
            console.log('Bramborová medaile!');
            break;
        default: // default jako else
            console.log('Děkujeme za účast :)');
    }

    */


    let pole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let novahodnota = pole[6];

    let poleJmen = [
        'John', 
        'Jane', 
        'Jack', 
        'Jill'
    ];


    poleJmen[2] = "Jackie";


    let polePoli = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    polePoli[1][2];


    let poleRuznychDatovychTypu = [
        1,
        'John',
        true,
        [1, 2, 3]
    ];


    let person = {
        jmeno: 'John',
        prijmeni: 'Doe',
        vek: 30,
        pohlavi: 'muž',
        zamestnan: true,
        fullname: this.jmeno + ' ' + this.prijmeni,
    };

    person.jmeno ;
    person.vek;
    person.fullname;

    person.jmeno = 'Jane';

    person.jmeno;


    let poleObejktu = [
        {
            jmeno: 'John',
            prijmeni: 'Doe',
            vek: 30,
            pohlavi: 'muž',
            zamestnan: true
        },
        {
            jmeno: 'Jane',
            prijmeni: 'Doe',
            vek: 28,
            pohlavi: 'žena',
            zamestnan: false
        }
    ];

    poleObejktu[0].vek;


    let element = {
        tag: 'div',
        text: 'Ahoj světe!',
        class: 'container',
        id: 'element',
        style: 'color: red;',
        children: [
            {
                tag: 'p',
                text: 'Lorem ipsum',
                class: 'paragraph bg-gray-500',
                id: 'paragraph',
                style: 'font-size: 16px;'
            },
            {
                tag: 'a',
                text: 'Klikni na mě',
                href: 'https://www.seznam.cz',
                class: 'link',
                id: 'link',
                style: 'text-decoration: none;'
            }
        ],

        getText: function() {
            return this.text;
        }
    }  

    element.getText();

    
    let nadpisElement = document.getElementsByClassName('nadpis');




nadpisElement[0].style.display = "none";






