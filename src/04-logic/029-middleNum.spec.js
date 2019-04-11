// import functions
const { numbers,EQUAL, NOTEQUAL } = require('./029-middleNum');

describe('logic/029', () => {
    describe('Check if sum of first and third num is equal to second num', () => {
        it('should be defined', () => {
            expect(numbers).toBeDefined();
        });
        it('should return the type of character', () => {
            expect(numbers(1,2,1)).toBe(EQUAL);
            expect(numbers(1,2,3)).toBe(NOTEQUAL);
            expect(numbers(45,50,5)).toBe(EQUAL);
        });
    });
});