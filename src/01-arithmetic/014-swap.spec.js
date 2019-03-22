// import functions
const { swap } = require('./014-swap');
describe('arithmetic/013', () => {
    describe('Swap two numbers', () => {
        it('should be defined', () => {
            expect(swap).toBeDefined();
        });
        it('should swap value of num1 and num2', () => {
            const result = swap(1,2);
            expect(result).toEqual(jasmine.objectContaining({
                n1: 2,
                n2: 1
            }));
        });
    });
});