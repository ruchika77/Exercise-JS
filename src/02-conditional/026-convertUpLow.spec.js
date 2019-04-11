// import functions
const { changeCase} = require('./026-convertUpLow');

describe('Conditional/026', () => {
    describe('Convert entered character in upper case or lower case', () => {
        it('should be defined', () => {
            expect(changeCase).toBeDefined();
        });
        it('should return in upper case or lower case', () => {
            expect(changeCase('B')).toBe('b');
            expect(changeCase('b')).toBe('B');
        });
    });
});