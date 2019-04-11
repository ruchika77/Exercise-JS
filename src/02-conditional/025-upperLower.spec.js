// import functions
const { characterCase, LOWER, UPPER } = require('./025-upperLower');

describe('Conditional/025', () => {
    describe('Find entered character is in upper case or lower case', () => {
        it('should be defined', () => {
            expect(characterCase).toBeDefined();
        });
        it('should return if character is upper case or lower case', () => {
            expect(characterCase('B')).toBe(UPPER);
            expect(characterCase('b')).toBe(LOWER);
        });
    });
});