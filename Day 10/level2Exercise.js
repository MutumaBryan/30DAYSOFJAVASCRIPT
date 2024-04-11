// Q1
// Find a union b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const union = [...a, ...b]
const unionSet = new Set(union)
// Q2
// Find a intersection b
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]

const c = a.filter(num => b.includes(num))
const intersectionSet = new Set(c)
// Q3
// Find a with b
const exclude = a.filter(num => !b.includes(num));
const excludeSet = new Set(exclude);