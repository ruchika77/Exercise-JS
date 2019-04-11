// import functions
const { characterType, LOWER, UPPER, NUM, SPECIALCHAR } = require('./027-typeOfCharacter');

describe('Conditional/027', () => {
    describe('Find entered character type', () => {
        it('should be defined', () => {
            expect(characterType).toBeDefined();
        });
        it('should return the type of character', () => {
            expect(characterType('B')).toBe(UPPER);
            expect(characterType('b')).toBe(LOWER);
            expect(characterType('2')).toBe(NUM);
            expect(characterType('@')).toBe(SPECIALCHAR);
            expect(characterType('¡')).toBe(SPECIALCHAR);
        });
    });
});