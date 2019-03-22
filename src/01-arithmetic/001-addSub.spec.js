// import functions
const { add, subtract } = require('./001-addSub');

describe('arithmetic/001', () => {
    describe('addition', () => {
        it('should be defined', () => {
            expect(add).toBeDefined();
        });
        it('should return the sum of two numbers', () => {
            expect(add(2, 3)).toBe(5);
            expect(add(0, 3)).toBe(3);
            expect(add(10, 14)).toBe(24);
            expect(add(0, 9)).toBe(9);
        });
    });
    describe('subtraction', () => {
        it('should be defined', () => {
            expect(subtract).toBeDefined();
        });
        it('should subtract two numbers', () => {
            expect(subtract(2, 3)).toBe(-1);
            expect(subtract(0, 0)).toBe(0);
            expect(subtract(-1, -2)).toBe(1);
            expect(subtract(6, 2)).toBe(4);
        });
    });
});
