import { giveAwayCookie } from "../01-two-fer";
import { expect, it } from '@jest/globals';

describe('Test giveAwayCookie() function on all conditions', () => {
    it('Should call giveAwayCookie with defined "Alice" string', () => {
        expect(giveAwayCookie('Alice')).toEqual('One for Alice, one for me.')
    });

    it('Should call giveAwayCookie with defined "Bohdan" string', () => {
        expect(giveAwayCookie('Bohdan')).toEqual('One for Bohdan, one for me.')
    });

    it('Should call giveAwayCookie with defined "Zaphod" string', () => {
        expect(giveAwayCookie('Zaphod')).toEqual('One for Zaphod, one for me.')
    });

    it('Should call giveAwayCookie with undefined string', () => {
        expect(giveAwayCookie()).toEqual('One for you, one for me.')
    });

    it('Should call giveAwayCookie with empty string', () => {
        expect(giveAwayCookie('')).toEqual('One for you, one for me.')
    });
});
