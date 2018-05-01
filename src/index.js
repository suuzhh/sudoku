function makeRow(v = 0) {
    const array = new Array(9)
    return array.fill(v)
}

function makeMatrix(v = 0) {
    return Array.from({ length: 9 }, () => makeRow(v))
}

const a = makeMatrix()
a[0][1] = 2
console.log(a[0] === a[1])

