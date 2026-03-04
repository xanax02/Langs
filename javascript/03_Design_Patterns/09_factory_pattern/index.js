// we use factory functions in order to create new objects.
// A factory function is a function that returns new object without the use of new keyword.

const createUser = ({ fName, lName, email }) => ({
  firstName: fName,
  lastName: lName,
  email,
  fullName: () => {
    console.log(`${this.firstName} ${this.lastName}`);
  },
});

//pros
// The factory pattern is useful when we have to create multiple smaller objects that share the same properties.
// A factory function can easily return a custom object depending on the current environment, or user-specific configuration.
