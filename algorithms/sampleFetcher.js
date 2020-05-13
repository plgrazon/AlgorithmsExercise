/*
* We are working on an autocomplete form.
* We need to implement the behavior that will fill out the contents of the dropdown for a given `prefix` value.
* The dropdown data comes from multiple sources.
* Write a function that takes a list of `fetcher` functions and returns a function that accepts the `prefix` and returns a list of the results from all fetchers called with that prefix.
*/
​
sampleFetcher('prefix', callback);
exampleCallback = function(results) { /* results is an array of strings */ }
​
// `combineFetcher` used to set a function to `fetchAll`
// `fetchAll` will match the form of the other fetcher functions.
fetchAll = combineFetchers([fruitFetcher, animalFetcher, mineralFetcher]);
​
// another example `fetcher`
animalFetcher('g', function(results) { console.log(results) })
// this might asynchronously print ["giraffe", "gorilla"]
​
// example of what `fetchAll` should look like after `combineFetcher` is finished
fetchAll('g', function(results) { console.log(results) })
// this might asynchronously print ["giraffe", "gorilla", "grape", "grape", "gem", "geode"]
​
// A typescript signature for a fetcher function.
type Fetcher = (prefix: string, callback: (results: string[]) => void) => void
​
function combineFetchers(arrayOfFetchers){
  // your code
}

// Austen Talbot
/*
* We are working on an autocomplete form.
* We need to implement the behavior that will fill out the contents of the dropdown for a given `prefix` value.
* The dropdown data comes from multiple sources.
* Write a function that takes a list of `fetcher` functions and returns a function that accepts the `prefix` and returns a list of the results from all fetchers called with that prefix.
*/

// sampleFetcher('prefix', callback);
// exampleCallback = function(results) { /* results is an array of strings */ }

// `combineFetcher` used to set a function to `fetchAll`
// `fetchAll` will match the form of the other fetcher functions.
// fetchAll = combineFetchers([fruitFetcher, animalFetcher, mineralFetcher]);

// another example `fetcher`
// animalFetcher('g', function(results) { console.log(results) })
// this might asynchronously print ["giraffe", "gorilla"]

// example of what `fetchAll` should look like after `combineFetcher` is finished
// fetchAll('g', function(results) { console.log(results) })
// this might asynchronously print ["giraffe", "gorilla", "grape", "grape", "gem", "geode"]

// A typescript signature for a fetcher function.
// type Fetcher = (prefix: string, callback: (results: string[]) => void) => void

function combineFetchers(arrayOfFetchers){
  return function(prefix, callback) {
    let results = new Array(arrayOfFetchers.length).fill(0).map(()=>[]);
    let filled = 0;
    
    const fillResultsAtIndex = (index) => (r) => {
      results[index] = r || [];
      filled++;
      if (filled === arrayOfFetchers.length) callback(flatten(results));
    }
    
    arrayOfFetchers.forEach((fetcher, ind)=> {
      fetcher(prefix, fillResultsAtIndex(ind));
    });
  }
}

function flatten(arr) {
  let results = [];
  arr.forEach(a=>a.forEach(v=>results.push(v)));
  return results;
}

const fetchBirds = (prefix, callback) => {
  let birds = ['a bird', 'b bird', 'c bird', 'd bird'];
  setTimeout(()=> {
    callback(birds.filter(b=>b.indexOf(prefix) !== -1));
  }, 523);
}
const fetchFruit = (prefix, callback) => {
  let fruit = ['a fruit', 'b fruit', 'c fruit', 'd fruit'];
  setTimeout(()=> {
    callback(fruit.filter(b=>b.indexOf(prefix) !== -1));
  }, 234);
}

const fetchStuff = (prefix, callback) => {
  let stuff = ['a stuff', 'b stuff', 'c stuff', 'd stuff'];
  setTimeout(()=> {
    callback(stuff.filter(b=>b.indexOf(prefix) !== -1));
  }, 457);
}

const fetchThings = combineFetchers([fetchBirds, fetchFruit, fetchStuff]);
fetchThings('b', (r)=>console.log(r));