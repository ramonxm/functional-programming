const { interval, Observable, noop, of, from } = require("rxjs");

const { last, map, concatAll } = require("rxjs/operators");

// Subscribe & Unsubscribe
const generateNumbers = interval(500);

const sub = generateNumbers.subscribe((num) => {
  console.log(Math.pow(2, num));
});

setTimeout(() => sub.unsubscribe(), 3000);

// Observable vs Promise
const promise = new Promise((resolve) => {
  resolve("john doe");
});

promise.then(console.log);

const obs = new Observable((subscriber) => {
  subscriber.next("john doe 2");
});

obs.subscribe(console.log);

// Observable
const observer = new Observable((subscriber) => {
  subscriber.next("RXJS");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("Error");
  }
});

observer.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log("complete"),
});

function entry(min, max) {
  return new Observable((subscriber) => {
    Array(max - min)
      .fill()
      .map((_, i) => {
        subscriber.next(i);
      });
    subscriber.complete();
  });
}

// deprecated
entry(4, 10).subscribe(
  (num) => console.log(`num${num}`),
  noop,
  () => console.log("End")
);

// Operators

// of -> creation operator
// last -> chained operator (Pipeable Op.)

of(1, 2, "ana", false, "ultimo")
  .pipe(last())
  .subscribe((value) => console.log(`This valor is ${value}`));

from([1, 2, "ana", false, "ultimo"])
  .pipe(
    last(),
    map((v) => v)
  )
  .subscribe((value) => console.log(`This valor is ${value}`));

interval(1000)
  .pipe(
    map((_) => [1, 2, 3]),
    concatAll()
  )
  .subscribe(console.log);
