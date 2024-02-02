function isValidWalk(walk) {
  if (walk.length != 10) {
    return false
  }
  const directions = { n: -2, w: -1, s: 2, e: 1 }
  let total = 0
  for (i = 0; i < walk.length; i++) {
    total = total + directions[walk[i]]
  }
  if (total == 0) {
    return true
  } else {
    return false
  }
}

function XO(str) {
  const lower = str.toLowerCase()
  const array = lower.split("")
  let xCount = 0
  let oCount = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] == "x") {
      xCount++
    }
    if (array[i] == "o") {
      oCount++
    }
  }
  if (xCount == oCount) {
    return true
  } else {
    return false
  }
}

// rowSumOddNumbers(1) //1
// rowSumOddNumbers(2) //8
// rowSumOddNumbers(3) //27
// rowSumOddNumbers(4)
// rowSumOddNumbers(5)

function rowSumOddNumbers(n) {
  let start = n * n - n + 1
  let sum = 0
  for (i = 0; i < n; i++) {
    sum = sum + start
    start = start + 2
  }
  return sum
}

//solution(10)

function solution(number) {
  let sum = 0
  for (i = 0; i < number; i++) {
    if (isInt(i / 3)) {
      sum = sum + i
      continue
    } else if (isInt(i / 5)) {
      {
        sum = sum + i
        continue
      }
    }
  }
  function isInt(value) {
    var x = parseFloat(value)
    return !isNaN(value) && (x | 0) === x
  }
  return sum
}

//moveZeros([false,1,0,1,2,0,1,3,"a"])

function moveZeros(arr) {
  let array = []
  let zeroArray = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArray.push(arr[i])
    } else {
      array.push(arr[i])
    }
  }
  array.push(...zeroArray)
  return array
}

//dirReduc(["SOUTH","NORTH","EAST","WEST","SOUTH","NORTH","NORTH","NORTH","NORTH","EAST","WEST","NORTH","SOUTH","EAST","WEST"])

function dirReduc(arr) {
  const values = { NORTH: 1, SOUTH: -1, EAST: 2, WEST: -2 }
  const startL = arr.length
  if (startL == 1) {
    return arr
  }
  for (i = 1; i < arr.length; i++) {
    if (values[arr[i]] + values[arr[i - 1]] == 0) {
      arr.splice(i - 1, 2)
    }
  }
  if (startL == arr.length) {
    return arr
  } else {
    dirReduc(arr)
  }
  return arr
}

// findMissingLetter(['a','b','c','d','f'])

function findMissingLetter(array) {
  let missing = ""
  for (i = 1; i < array.length; i++) {
    if (array[i].charCodeAt(0) - array[i - 1].charCodeAt(0) != 1) {
      missing = String.fromCharCode(parseInt(array[i].charCodeAt(0) - 1))
    }
  }
  return missing
}

// validParentheses("()()((()")

function validParentheses(parens) {
  const array = parens.split("")
  const startL = array.length
  console.log(array)
  if (array.length == 0) {
    //console.log(true)
    return true
  }
  if (array.length % 2 != 0) {
    console.log(false)
    return false
  }
  for (i = 1; i < array.length; i++) {
    if (array[i].charCodeAt(0) - array[i - 1].charCodeAt(0) == 1) {
      array.splice(i - 1, 2)
      console.log(array)
    }
  }

  if (startL == array.length) {
    console.log(false)
    return false
  } else {
    validParentheses(array.join("").trim(","))
  }
}

// Multiples of 3 or 5 - 6 kyu
// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  let total = 0
  for (let i = number - 1; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      total = total + i
    }
  }
  return total
}

// The Hashtag Generator - 5 kyu
// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if (!str) {
    return false
  }
  let arr = str.split(" ")
  let hash = "#"
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  hash = hash + arr.join("")
  if (hash.length > 140 || hash.trim().length < 2) {
    return false
  }
  return hash
}

// Dead Ants - 6 kyu
// https://www.codewars.com/kata/57d5e850bfcdc545870000b7

deadAntCount = function (ants) {
  if (ants == null) {
    return 0
  }
  console.log(ants)
  let ants2 = ants.replaceAll("ant", "")

  if (ants2.length > 0) {
    let a = 0
    let n = 0
    let t = 0
    for (let i = 0; i < ants2.length; i++) {
      if (ants2[i] == "a") {
        a++
      } else if (ants2[i] == "n") {
        n++
      } else if (ants2[i] == "t") {
        t++
      }
    }
    return Math.max(a, n, t)
  }
  return 0
}

// Manhattan Distance - 6 kyu
// https://www.codewars.com/kata/52998bf8caa22d98b800003a

function manhattanDistance(pointA, pointB) {
  let a = pointA[0] - pointB[0]
  let b = pointA[1] - pointB[1]
  if (a < 0) {
    a = a * -1
  }
  if (b < 0) {
    b = b * -1
  }
  return a + b
}

// Human Readable Time - 5 kyu
// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  let secs = seconds % 60
  let mins = Math.trunc(seconds / 60)
  let minsRem = mins % 60
  let hour = Math.trunc(mins / 60)
  return hour + ":" + minsRem + ":" + secs
}

// Pyramid Slide Down - 4 kyu
// https://www.codewars.com/kata/551f23362ff852e2ab000037

// longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])

// longestSlideDown([
//   [75],
//   [95, 64],
//   [17, 47, 82],
//   [18, 35, 87, 10],
//   [20, 4, 82, 47, 65],
//   [19, 1, 23, 75, 3, 34],
//   [88, 2, 77, 73, 7, 63, 67],
//   [99, 65, 4, 28, 6, 16, 70, 92],
//   [41, 41, 26, 56, 83, 40, 80, 70, 33],
//   [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//   [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//   [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//   [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//   [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//   [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
// ])

function longestSlideDown(pyramid) {
  let total = 0
  let node = 0
  let i = 0
  while (i < pyramid.length) {
    if (i == 0) {
      console.log(pyramid[0][0])
      total = total + pyramid[0][0]
    } else if (pyramid[i][node] > pyramid[i][node + 1]) {
      console.log(pyramid[i][node])
      total = total + pyramid[i][node]
    } else {
      console.log(pyramid[i][node + 1])
      total = total + pyramid[i][node + 1]
      node = node + 1
    }

    i++
  }
  console.log(total)
  return total
}

// Decimal to Binary
let a = 123
// console.log(a.toString(2))

// IBM HackerRank coding challenge #1
// getMinimumMoves([1, 2, 3], 4)

function getMinimumMoves(price, k) {
  let counter = 0
  let sortedArr = price.sort()
  let arrMed = price[Math.floor(price.length / 2)]

  while (arrMed != k) {
    if (arrMed > k) {
      price[Math.floor(price.length / 2)] =
        price[Math.floor(price.length / 2)] - 1
    } else if (arrMed < k) {
      price[Math.floor(price.length / 2)] =
        price[Math.floor(price.length / 2)] + 1
    }

    sortedArr = price.sort()
    counter++
    arrMed = price[Math.floor(price.length / 2)]
  }
  console.log(counter)
  return counter
}

// IBM HackerRank coding challenge #2

function countNumbersWithoutRepeatingDigits(arr) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    const digits = arr[i].toString()
    let hasRepeatingDigits = false

    for (let j = 0; j < digits.length; j++) {
      const currentDigit = digits[j]

      for (let k = j + 1; k < digits.length; k++) {
        if (currentDigit === digits[k]) {
          hasRepeatingDigits = true
          break
        }
      }

      if (hasRepeatingDigits) {
        break
      }
    }

    if (!hasRepeatingDigits) {
      count++
    }
  }

  return count
}

// const myNumbers = [123, 456, 789, 112, 223, 445]
// console.log("Count:", countNumbersWithoutRepeatingDigits(myNumbers))



// The lost beginning
// https://www.codewars.com/kata/659af96994b858db10e1675f

beginning("123456789101112131415")
beginning("17181920")
beginning("72637236")
beginning("1112")
beginning("91011")
beginning("99100")

function beginning(xs) {
  let increasing = false

  for (let i = 1; i < xs.length; i++) {
    let part1 = xs.substr(0, i)
    let part2 = Number(xs.substr(i, i))
    let part2l = Number(xs.substr(i, i + 1))

    if (Number(part1) + 1 == part2 || Number(part1) + 1 == part2l) {
      let increment = Number(part1)
      let string = increment.toString()

      while (string.length < xs.length) {
        increment = increment + 1
        string = string + increment.toString()
      }

      if (string == xs) {
        increasing = true
        return Number(part1)
      }
    }
  }

  if (increasing == false) {
    return Number(xs)
  }
}
