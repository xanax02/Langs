// The module pattern allows you to split up your code into smaller, reusable pieces.
// we can rename the imported values, by using the as keyword.

//dynaic imports

//using then
// import ("module").then((module) => {
//     module.default();
//     module.namedExport();
// })

//using async await
// (async () => {
//     const module = await import("module");
//     module.default();
//     module.namedExport();
// })

const button = document.createElement("button");

button.addEventListener("click", () => {
  import("./math.js").then((module) => {
    module.add(2, 3);
  });
});

// the import() function can receive an expression.
// It allows us to pass template literals, in order to dynamically load modules based on a given value.
//   async function loadDogImage() {
// const res = await import(`../assets/dog${num}.png`);
// setSrc(res.default);
//   }
