function makeRow(v = 0) {
    const array = new Array(9)
    return array.fill(v)
}

function makeMatrix(v = 0) {
    return Array.from({ length: 9 }, () => makeRow(v))
}

/**
 * Fisher-Yates 洗牌算法
 * @param {*} array 
 */
function shuffle(array) {
    const endIndex = array.length - 1
    for (let i = 0; i < endIndex; i++) {
        const j = i + Math.floor(Math.random() * (array.length - i));

        [array[i], array[j]] = [array[j], array[i]]
        console.log(array)
    }
    return array
}

const a = Array.from({ length: 9 }, (v, i) => i)
console.log(a)
console.log(shuffle(a))
