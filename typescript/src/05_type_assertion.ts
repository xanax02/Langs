const canvas1 = document.getElementById("my-canvas") as HTMLCanvasElement;
// or
const canva2 = <HTMLCanvasElement> document.getElementById("my-canvas");

// non-null assertion operator !

function liveDangerously(x? : number | null) {
    console.log(x!.toFixed());
}