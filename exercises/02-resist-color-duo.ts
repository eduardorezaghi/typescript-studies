// exercism.org - Exercise 02: resist-color-duo.ts

export function resistColorDuo(colors: string[]): number {
    const colrs = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
    return colrs.indexOf(colors[0]) * 10 + colrs.indexOf(colors[1])
}
