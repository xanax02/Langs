//subscribe certain objects (oberservers) to an object called observable
//observable will notify all subscribed objects about any changes

//observable obj contans
//1. array of observers
//2. subscribe() to add observer in observer list
//3. unsubscribe to remove observer
//4. notify() to nottify all observers about any changes.

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe() {
    this.observers.push();
  }

  unsubscribe() {
    this.observers.pop();
  }

  notify() {
    this.observers.forEach((observer) => observer(data));
  }
}

const observable = new Observable();

//whenever user clicks button or Switch notify logger and toaster
export default function App() {
  return (
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch />} />
    </div>
  );
}

const logger = (data) => console.log(data);
const toaster = (data) => console.log(data);

observable.subscribe(logger);
observable.subscribe(toaster);

// Pros
// Using the observer pattern is a great way to enforce separation of concerns and the single-responsiblity principle.
// The observer objects aren’t tightly coupled to the observable object, and can be (de)coupled at any time.
// The observable object is responsible for monitoring the events, while the observers simply handle the received data.

//cons
// The observer pattern can lead to memory leaks if observers are not removed from the observable object
// when they are no longer needed.
//If an obverser becomes complex, it may cause performance issues. when notifying all subscribers.
