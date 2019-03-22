// import functions
const { squareRoot } = require('./004-squareRoot');
describe('arithmetic/004', () => {
    describe('squareroot', () => {
        it('should be defined', () => {
            expect(squareRoot).toBeDefined();
        });
        it('should return squareroot of a number', () => {
            expect(squareRoot(2)).toBe(1);
            expect(squareRoot(4)).toBe(2);
            expect(squareRoot(13)).toBe(4);
            expect(squareRoot(29)).toBe(5);
        });
    });
});
