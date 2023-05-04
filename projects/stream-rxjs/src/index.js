const { interval, Observable } = require("rxjs");

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
