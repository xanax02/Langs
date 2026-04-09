// with command pattern we can decouple the objects that execute a certain task from the object that calls the method.

//eg
class orderManager {
  constructor() {
    this.orders = [];
  }

  placeOrder(order, id) {
    this.orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  }

  trackOrder(id) {
    return `Your order ${id} will arrive in 20 minutes.`;
  }

  cancelOrder(id) {
    this.orders = this.orders.filter((order) => order.id !== id);
    return `You have canceled your order ${id}`;
  }
}

const manager = new OrderManager();

manager.placeOrder("Shahi paneer", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");

// Say that instead of calling it placeOrder, we now rename it to addOrder! This would mean that
// we would have to make sure that we don’t call the placeOrder method anywhere in our codebase,
//  which could be very tricky in larger applications. Instead, we want to decouple the methods from the
// manager object, and create separate command functions for each command!

class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    return `You have canceled your order ${id}`;
  });
}

function TrackOrderCommand(id) {
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}
