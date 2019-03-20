// import functions
const { squareRoot } = require('./sqrt');
describe('arithmetic/015', () => {
    describe('Distance between 2 numbers', () => {
        it('should be defined', () => {
            expect(squareRoot).toBeDefined();
        });
        it('should return distance between numbers', () => {
            expect(squareRoot(5, 10, 0, 0)).toBe(5);
        });
    });
});