// import functions
const { oddEven, ODD, EVEN } = require('./017-evenOdd');

describe('Conditional/017', () => {
    describe('Find number is odd or even', () => {
        it('should be defined', () => {
            expect(oddEven).toBeDefined();
        });
        it('should return if number is odd or even', () => {
            expect(oddEven(14)).toBe(ODD);
            expect(oddEven(15)).toBe(EVEN);
        });
    });
});