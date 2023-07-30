// exercism.org - Exercise 03: resist-color-trio.ts

export function decodedResistorValue(colors: string[]): string {
    const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
    const RESISTANCE_PREFIX = {
        0: 'ohms',
        3: 'kiloohms',
        6: 'megaohms',
        9: 'gigaohms'
    }

    const resistance = (COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1])) * 10 ** COLORS.indexOf(colors[2])
    const prefix = Math.floor((resistance > 0? Math.log10(resistance): 1) / 3) * 3
    const scaledValue = resistance / 10 ** prefix;

    return `${scaledValue} ${RESISTANCE_PREFIX[prefix]}`
}