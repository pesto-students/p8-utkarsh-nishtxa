// memoize function
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

// given reducer method
function add(a,b) {
  return a+b;
}

// function to calculate processing time
function time(fn) {
  console.time();
  console.log(fn());
  console.timeEnd();
}

const memoizeAdd = memoize(add);

time(() => memoizeAdd(100,100));
time(() => memoizeAdd(100,200));
time(() => memoizeAdd(100,100)); //returns 200 without computing
