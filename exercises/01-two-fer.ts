// exercism.org - Exercise 01: two-fer.ts

export function giveAwayCookie(name?: string): string {
  if (!name || name.length === 0) return 'One for you, one for me.'
  return `One for ${name}, one for me.`
}


console.log(giveAwayCookie('Alice'))
console.log(giveAwayCookie('Bohdan'))
console.log(giveAwayCookie())
console.log(giveAwayCookie('Zaphod'))
console.log(giveAwayCookie(''))
