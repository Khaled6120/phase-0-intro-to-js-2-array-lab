
let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = (name) => cats.push(name);

let destructivelyPrependCat = (name) => cats.unshift(name);

let destructivelyRemoveLastCat = () => cats.pop();

let destructivelyRemoveFirstCat = () => cats.shift();

let appendCat = (name) => { return [...cats, name] }

let prependCat = (name) => { return [name, ...cats] }

let removeLastCat = () => { return cats.slice(0, 2) }

let removeFirstCat = () => { return cats.slice(1) }