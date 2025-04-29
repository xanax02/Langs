abstract class AbstractUserClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract greet: () => string;

  hello() {
    console.log("default greee hi");
  }
}

class AbstractEmployee extends AbstractUserClass {
  name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
  }

  greet = () => "string";
}
