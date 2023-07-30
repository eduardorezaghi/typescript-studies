import { resistColorDuo } from "../02-resist-color-duo"



describe('Resistor Colors', () => {

    it('Brown and black', () => {
        expect(resistColorDuo(['brown', 'black'])).toEqual(10)
    })

    it('Blue and grey', () => {
        expect(resistColorDuo(['blue', 'grey'])).toEqual(68)
    })

    it('White and red', () => {
        expect(resistColorDuo(['white', 'red'])).toEqual(92)
    })

    it('Yellow and violet', () => {
        expect(resistColorDuo(['yellow', 'violet'])).toEqual(47)
    })

    it('Orange and orange', () => {
        expect(resistColorDuo(['orange', 'orange'])).toEqual(33)
    })

    it('Ignore additional colors', () => {
        expect(resistColorDuo(['green', 'brown', 'orange'])).toEqual(51)
    })

    it('Black and brown, one-digit', () => {
        expect(resistColorDuo(['black', 'brown'])).toEqual(1)
    })

})