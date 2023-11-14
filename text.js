// const myarray = randomarrygenrator(10,100)

function randomganrator() {
    const myarray = [];
    for (let i = 0; i < 20; i++) {
        // console.log(i);
        const random_value = Math.floor(Math.random() * 100);
        myarray.push(random_value);
    }
    return myarray
}

console.log(randomganrator());