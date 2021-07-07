// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, event) {
    const arrayOfCards = []

    for (let i = 0; i < names.length; i++) {
        arrayOfCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arrayOfCards
}

function countDown(num) {
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--)
    }
}