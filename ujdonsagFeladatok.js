// 1. Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja 
// a duplikált elemeket! A függvény visszatérési értéke a duplikált elemektől mentes új tömb!
console.log('--------------1.feladat-------------');

const duparr=[1,1,2,2,3,4,5,5,6,7,8,9,9,9];
function szuro(arr) {
    const elemek = new Set();
    // for (let i=0;i<arr.length; i +=1){
    //  elemek.add(arr[i])
    //   };
      duparr.forEach(item=>elemek.add(item));
      let myArr = Array.from(elemek);
      console.log(myArr);
};
szuro(duparr);

// 2. Készíts egy HU nevű objektumot, aminek az alábbi propertijei vannak:
// date(): Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
// currency(): Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően 
// a Ft végződéssel együtt
// list(): A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második 
// és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)
console.log('--------------2.feladat-------------');
function HUformazo(datepara,number,lista){
const dateuj= new Date(datepara); 
const HU={
    date: 
    new Intl.DateTimeFormat('hu-HU').format(dateuj),
    currency:
    new Intl.NumberFormat('hu-HU',{ style: 'currency', currency: 'HUF' }).format(number),
    list:
      new Intl.ListFormat('hu', { style: 'long', type: 'conjunction' }).format(lista)
};
console.log(HU);
};
HUformazo('2020-12-01',1234567,['első az ETO','második a DAC','harmadik a Barca']);

// 3.Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:
// arrayToMap(array)
// arrayToSet(array)
// setToMap(set)
// setToArray(set) array.from
// mapToArray(map)
// mapToSet(map)
// A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett
//  adattípusból konvertálják át az adatokat egy másikba. Mindegyik metódus visszatérési értéke 
//  egy új Array, Map, vagy Set object.
console.log('-----------------3.feladat-----------');

const ujset=new Set(abc);
ujset.add('a');
ujset.add('b');

function setToArray(set){
const myarr=[...set];
console.log(myarr);
};
setToArray(ujset);

const arr2=[1,2,3,4,5,6]
function arrayToSet(arr){
    let set2=new Set(arr);
    console.log(set2);
};
arrayToSet(arr2);


