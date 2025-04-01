const x: number = 1

function greet(name: string): string {
    return "hello" + name;
}

function runAfter1Sec(fn: () => void): void {
    setTimeout(() => {
        fn()
    }, 1000)
}


//interfaces
