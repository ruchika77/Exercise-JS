// import functions
const { multiply, divide } = require('./002-multiDivide');
describe('arithmetic/002', () => {
    describe('multiplication', () => {
        it('should be defined', () => {
            expect(multiply).toBeDefined();
        });
        it('should multiply two numbers', () => {
            expect(multiply(2, 5)).toBe(10);
            expect(multiply(10, 0)).toBe(0);
            expect(multiply(-1, 25.12)).toBe(-25);
            expect(multiply(6, 12)).toBe(72);
        });
    });
    describe('division', () => {
        it('should be defined', () => {
            expect(divide).toBeDefined();
        });
        it('should divide two numbers', () => {
            expect(divide(10, 5)).toBe(2);
            expect(divide(0, 5)).toBe(0);
            expect(divide(11, 3)).toBe(4);
            expect(divide(6, 12)).toBe(1);
        });
    });
});
