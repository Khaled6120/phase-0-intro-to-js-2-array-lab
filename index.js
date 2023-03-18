
let cats = ["Milo", "Otis", "Garfield"];

let desAppendCat = (name) => cats.push(name);

let desPrependCat = (name) => cats.unshift(name);

let desRemoveLastCat = () => cats.pop();

let desRemoveFirstCat = () => cats.shift();

let appendCat = (name) => { 
  return [...cats, name]
}

let prependCat = (name) => { 
  return [name, ...cats] 
}

let removeLastCat = () => { 
  return cats.slice(0, 2)
}

let removeFirstCat = () => { 
  return cats.slice(1)
}
