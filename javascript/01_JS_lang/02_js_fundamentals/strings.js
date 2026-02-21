console.log("Hello world".startsWith("Hel"));

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));

function checkSpam(str) {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toUpperCase().includes("XXX")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
}

const name = "Alice";
tag`Hello ${name}`;
