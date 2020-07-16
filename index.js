// Code your solutions in this file

// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
// }

function writeCards(names_array, event_name) {
    let ThankYous = []
    for (let i = 0; i < names_array.length; i++) {
        ThankYous.push(`Thank you, ${names_array[i]}, for the wonderful ${event_name} gift!`)
    }
    return ThankYous
}

// while ([condition]) {
//     [loop body]
// }

function countDown(startfrom) {
    while (startfrom > 0) {
        console.log(startfrom); startfrom--;
    }
    console.log(startfrom)
}

// countDown(10);